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
  SimpleGrid
} from "@chakra-ui/react"
import Component1 from './components/component1';
import Component2 from './components/component2';
import Component3 from './components/component3';
import Component4 from './components/component4';

// const metadata: Metadata = {
//     title: 'Next.js',
//   }

interface PageProps {
  index: number;
}

export interface Property {
  propertyInformation: PropertyInformation;
  propertyPhotos: PropertyPhotos;
  propertyDescription: PropertyDescription;
}

export interface PropertyInformation {
  propertyType: string;
  title: string;
  price: number;
  energyClass: number;
  ges: number;
  address: string;
  area: number;
  furnished: boolean;
  rooms: number;
  balcony: boolean;
  terrace: boolean;
  garden: boolean;
  parking: number;
}

export interface PropertyPhotos {
  photos: string[];
}

export interface PropertyDescription {
  description: string;
}

const propertyTypes: string[] = [
  'Maison',
  'Appartement',
  'Studio',
  'Villa',
  'Chambre',
  'Bureau',
  'Commerce',
  'Parking',
  'Terrain',
  'Autre',
]

const steps = [
  { title: 'Information', description: 'Que possède votre bien ?' },
  { title: 'Photo', description: 'Montrez-nous votre bien !' },
  { title: 'Description', description: 'Dites-nous en plus !' },
  { title: 'Visite', description: 'Organisez des visites' },
]

const HostPage: React.FC = () => {

  const [property, setProperty] = useState<Property>({
    propertyInformation: {
      propertyType: propertyTypes[0],
      title: '',
      price: 0,
      energyClass: 0,
      ges: 0,
      address: '',
      area: 10,
      furnished: false,
      rooms: 0,
      balcony: false,
      terrace: false,
      garden: false,
      parking: 0,
    },
    propertyPhotos: {
      photos: [],
    },
    propertyDescription: {
      description: '',
    },
  })

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const stepAhead = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const stepBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

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

        <Box w='full' boxShadow='dark-lg' bg='white' py='10' borderRadius='2xl'>
          <Container>
            {activeStep === 0 && <Component1 data={property.propertyInformation} setData={setProperty}  />}
            {activeStep === 1 && <Component2 />}
            {activeStep === 2 && <Component3 />}
            {activeStep === 3 && <Component4 />}
          </Container>
        </Box>

        <Stack spacing={4} direction='row'>
          <ButtonGroup colorScheme='black' size='sm' w='full'>
            <Button variant='outline' onClick={stepBack}>Précedent</Button>
            <Spacer />
            <Button onClick={stepAhead}>Suivant</Button>
          </ButtonGroup>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default HostPage;