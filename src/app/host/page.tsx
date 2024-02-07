'use client'
import React, { useState } from 'react'
import {
  useSteps,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Box,
  Container,
  ButtonGroup,
  Button,
  Stack,
  Heading,
  Text,
  Flex,
  Spacer,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast
} from "@chakra-ui/react"
import Component1 from './components/component1';
import Component2 from './components/component2';
import Component3 from './components/component3';
import Component4 from './components/component4';
import { useAuth } from '@clerk/nextjs';
import { PromiseBasedToast } from '@/components/toaster';

// const metadata: Metadata = {
//     title: 'Next.js',
//   }

interface PageProps {
  index: number;
}

export interface Property {
  propertyInformation: PropertyInformation;
  propertyPicture: PropertyPicture;
  propertyDescription: PropertyDescription;
}

export interface PropertyInformation {
  propertyType: string;
  price: number;
  energyClass: string;
  ges: string;
  address: string;
  totalArea: number;
  livingArea: number;
  furnished: boolean;
  rooms: number;
  floor: number;
  floorsNumber: number;
  lift: boolean;
  balcony: boolean;
  terrace: boolean;
  garden: boolean;
  parking: number;
}

export interface PropertyPicture {
  photos: File[];
}

export interface PropertyDescription {
  title: string;
  description: string;
}

const propertyTypes: string[] = [
  'house',
  'apartment',
  'parking',
  'land',
  'details',
  'other',
]

const steps = [
  { title: 'Information', description: 'Que possède votre bien ?' },
  { title: 'Photo', description: 'Montrez-nous votre bien !' },
  { title: 'Description', description: 'Dites-nous en plus !' },
  { title: 'Valider', description: 'Confirmez votre annonce' },
  // { title: 'Visite', description: 'Organisez des visites' },
]

const HostPage: React.FC = () => {

  const { getToken } = useAuth();

  const [property, setProperty] = useState<Property>({
    propertyInformation: {
      propertyType: propertyTypes[0],
      price: 0,
      energyClass: 'Aucun',
      ges: 'Aucun',
      address: '',
      totalArea: 10,
      livingArea: 0,
      furnished: false,
      rooms: 0,
      floor: 0,
      floorsNumber: 0,
      lift: false,
      balcony: false,
      terrace: false,
      garden: false,
      parking: 0,
    },
    propertyPicture: {
      photos: Array(5).fill(''),
    },
    propertyDescription: {
      title: '',
      description: '',
    },
  })

  // const sendWithToaster = async () => {
  //   const toast = useToast();
  //   const promiseToast = send();
  //   toast.promise(promiseToast, {
  //     success: { title: 'Votre annonce bien a été créé', description: 'Youhou 🎉' },
  //     error: { title: 'Oups', description: 'Désolé, on a rencontré un problème lors de la création de votre annonce' },
  //     loading: { title: 'Création de votre annonce', description: 'Patientez, c\'est bientôt prêt!' },
  //   })
  // }

  const send = async () => {

    try {
      const token = await getToken();

      const promises: Promise<{ url: string, filename: string }>[] = property.propertyPicture.photos.map(() => getPresignedUrl());
      const urls = await Promise.all(promises);
      const promises2 = urls.map(url => uploadImageToS3(property.propertyPicture.photos[urls.indexOf(url)], url.url));
      await Promise.all(promises2);
  
      const propertyToSend = {
        ...property,
        propertyPicture: {
          photos: urls.map(url => url.filename),
        }
      }
  
      const body = {
        type: propertyToSend.propertyInformation.propertyType,
        title: propertyToSend.propertyDescription.title,
        description: propertyToSend.propertyDescription.description,
        energyClass: propertyToSend.propertyInformation.energyClass,
        ges: propertyToSend.propertyInformation.ges,
        price: propertyToSend.propertyInformation.price,
        address: propertyToSend.propertyInformation.address,
        images: propertyToSend.propertyPicture.photos,
        propertyType: propertyToSend.propertyInformation.propertyType,
        totalArea: propertyToSend.propertyInformation.totalArea,
        livingArea: propertyToSend.propertyInformation.livingArea,
        furnished: propertyToSend.propertyInformation.furnished,
        rooms: propertyToSend.propertyInformation.rooms,
        floor: propertyToSend.propertyInformation.floor,
        floorsNumber: propertyToSend.propertyInformation.floorsNumber,
        lift: propertyToSend.propertyInformation.lift,
        balcony: propertyToSend.propertyInformation.balcony,
        terrace: propertyToSend.propertyInformation.terrace,
        garden: propertyToSend.propertyInformation.garden,
        parking: propertyToSend.propertyInformation.parking,
      }
  
      await createProperty(token, body);
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }

  const getPresignedUrl = async (): Promise<{ url: string, filename: string }> => {
    try {
      const token = await getToken();
      const response = await fetch('http://localhost:3008/presigned-url', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok)
        throw new Error(`Server responded with ${response.status}`);
      const data = await response.json();
      return data;
    }
    catch (error) {
      throw error;
    }
  }

  const uploadImageToS3 = async (file: File, presignedUrl: string): Promise<void> => {
    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': 'image/jpeg',
        },
        mode: 'cors',
      });
  
      if (response.ok) {
        console.log('Image uploaded successfully');
      } else {
        throw new Error(`Server responded with ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  }

  const createProperty = async (token: string | null, body: any) => {
    try{
      const response = await fetch('http://localhost:3008/property', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(body),
      })
      if (!response.ok)
        throw new Error(`Server responded with ${response.status}`);
      return response.json();
    }
    catch (error) {
      throw error;
    }
  }

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const stepAhead = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
    else if (activeStep === steps.length - 1) {
      onOpen();
    }
  }

  const stepBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const rightButton = activeStep === steps.length - 1 ? 'Valider' : 'Suivant';

  // TODO: Faire en sorte que tout les composants prennent toute la hauteur de la page et que s'il dépasse on puisse scroll,  comme ça les boutons on une position fixe, c'est plus érgonomique

  return (
    <Container maxW='900px'>
      <SimpleGrid columns={1} spacing='50px'>
        <Stepper index={activeStep} size='sm' colorScheme='black'>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepIndicator cursor='pointer'>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink='0' cursor='pointer'>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        <Stack spacing={4} direction='row'>
          <ButtonGroup colorScheme='black' size='sm' w='full'>
            <Button variant='outline' onClick={stepBack}>Précedent</Button>
            <Spacer />
            <Button onClick={stepAhead}>{rightButton}</Button>
          </ButtonGroup>
        </Stack>

        <Box w='full' boxShadow='dark-lg' bg='white' py='10' borderRadius='2xl' maxH=''>
          <Container>
            {activeStep === 0 && <Component1 data={property.propertyInformation} setData={setProperty}  />}
            {activeStep === 1 && <Component2 data={property.propertyPicture} setData={setProperty} />}
            {activeStep === 2 && <Component3 data={property.propertyDescription} setData={setProperty} />}
            {activeStep === 3 && <Component4 />}
          </Container>
        </Box>

        <Stack spacing={4} direction='row'>
          <ButtonGroup colorScheme='black' size='sm' w='full'>
            <Button variant='outline' onClick={stepBack}>Précedent</Button>
            <Spacer />
            <Button onClick={stepAhead}>{rightButton}</Button>
          </ButtonGroup>
        </Stack>
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Publier cette merveille</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Voulez-vous publier cette merveille ?<br/><br/>
            Si vous hésitez, vous pouvez toujours retourner en arrière pour vous assurer que tout est parfait.<br/>
            <Text as='i' color='darkgray' fontSize='xs'>Même si on sait que c&lsquo;est déjà parfait.</Text>
          </ModalBody>

          <ModalFooter>
              <Button colorScheme='black' variant='outline' mr={3} onClick={onClose}>
                Retour
              </Button>
              <PromiseBasedToast functionToaster={send} buttonProps={{colorScheme: 'black', variant: 'solid'}}>Publier</PromiseBasedToast>
              {/* <Button colorScheme='black' variant='solid' onClick={sendWithToaster}>Publier</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Container>
  );
}

export default HostPage;