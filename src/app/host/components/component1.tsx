import HookUsage from '@/components/hookUsage';
import { Radio, HStack, VStack, Text, RadioGroup, FormControl, FormLabel, Input, FormHelperText, InputGroup, InputRightAddon, Box, FormErrorMessage, Heading, List, ListItem, Checkbox, Stack, useRadioGroup, Link } from '@chakra-ui/react';
import React from 'react';
import AddressInput from '@/components/addressInput';
import RadioCard, { RadioOption } from '@/components/radioCard';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Property, PropertyInformation } from '../page';

interface HookUsageProps {
  features: Features;
  onValueChange: (value: Features) => void;
}

interface InformationProps {
  data: PropertyInformation;
  setData: React.Dispatch<React.SetStateAction<Property>>;
  // onValueChange: (value: PropertyInformation) => void;
}

interface Features {
  furnished: string;
  surface: string;
  room: number | null;
  floor: number | null;
  onValueChange: (value: number | null) => void;
}

const Component1: React.FC<InformationProps> = ({ data, setData }) => {

  const handleChange = (nextValue: string /*e: React.ChangeEvent<HTMLInputElement>*/) => {
    // const { name, value } = e.target;

    setData(prevState => ({
      ...prevState,
      informations: {
        ...prevState.propertyInformation,
        value: nextValue
        // [name]: value
      }
    }));
  };

  const [furnished, setVfurnished] = React.useState('0')
  const [surface, setSurface] = React.useState<number>(0)
  const [room, setRoom] = React.useState<number | null>(0)
  const [bedroom, setBedroom] = React.useState<number | null>(0)
  const [floor, setFloor] = React.useState<number | null>(0)

  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const handleSurfaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSurface = parseFloat(e.target.value);
    if (!isNaN(newSurface)) {
      setSurface(newSurface);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const isError = !surface || surface < 9

  const mawWInput = '300px';

  const optionsEnergyClass: RadioOption[] = [
    { value: 'A', bgColor: 'green.500' },
    { value: 'B', bgColor: 'green.400' },
    { value: 'C', bgColor: 'yellow.400' },
    { value: 'D', bgColor: 'yellow.500' },
    { value: 'E', bgColor: 'orange.500' },
    { value: 'F', bgColor: 'orange.600' },
    { value: 'G', bgColor: 'red.500' },
    { value: 'H', bgColor: 'gray.800' },
    { value: 'Aucun', bgColor: 'gray.500' },
  ]
  const optionsGES: RadioOption[] = [
    { value: 'A', bgColor: 'purple.100' },
    { value: 'B', bgColor: 'purple.200' },
    { value: 'C', bgColor: 'purple.300' },
    { value: 'D', bgColor: 'purple.400' },
    { value: 'E', bgColor: 'purple.500' },
    { value: 'F', bgColor: 'purple.600' },
    { value: 'G', bgColor: 'purple.700' },
    { value: 'Aucun', bgColor: 'gray.500' },
  ]

  const { getRootProps: getRootPropsEnergyClass, getRadioProps: getRadioPropsEnergyClass } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })
  const { getRootProps: getRootPropsGES, getRadioProps: getRadioPropsGES } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const groupEnergryClass = getRootPropsEnergyClass()
  const groupGES = getRootPropsGES()

  return (
    <VStack alignItems={'flex-start'} spacing='30px' maxW='800px'>

      <FormControl isRequired >
        <FormLabel>Quel est le type de votre bien ?</FormLabel>
        {/* <RadioGroup onChange={setVfurnished} value={furnished} colorScheme='black'> */}

        <RadioGroup onChange={handleChange} value={data.propertyType.value} colorScheme='black'>
          <HStack>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Radio value='Appartement'>Appartement</Radio>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Radio value='Maison'>Maison</Radio>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Radio value='Parking'>Parking</Radio>
            </Box>
          </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl isRequired isInvalid={isFocused && isError} maxW={mawWInput}>
        <FormLabel>Quel est la surface de votre bien ?</FormLabel>
        <InputGroup size='sm' borderRadius='lg'>
          <Input onBlur={handleFocus} value={surface.toString()} onChange={handleSurfaceChange} borderRadius='lg' />
          <InputRightAddon borderEndRadius='lg' children='m²' />
        </InputGroup>
        {isFocused && isError && <FormErrorMessage>La surface n'est pas conforme à la loi Carrez.</FormErrorMessage>}
      </FormControl>

      <FormControl as='fieldset' maxW={mawWInput}>
        <FormLabel as='legend'>
          Votre bien est-il meublé ?
        </FormLabel>
        <RadioGroup onChange={setVfurnished} value={furnished} colorScheme='black'>
          <HStack>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Radio value='1'>Oui</Radio>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Radio value='0'>Non</Radio>
            </Box>
          </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl isRequired maxW={mawWInput}>
        <FormLabel>Combien y a-t-il de pièces ?</FormLabel>
        <HookUsage value={room} onValueChange={(newValue) => setRoom(newValue)} />
        <FormHelperText>La cuisine, la salle de bain et les toilettes ne sont pas à prendre en compte.</FormHelperText>
      </FormControl>

      <FormControl maxW={mawWInput}>
        <FormLabel>Combien y a-t-il de chambres ?</FormLabel>
        <HookUsage value={bedroom} onValueChange={(newValue) => setBedroom(newValue)} />
      </FormControl>

      <FormControl maxW={mawWInput}>
        <FormLabel>Quels sont les avantages ?</FormLabel>
        <RadioGroup onChange={setVfurnished} value={furnished} colorScheme='black' maxW='150px'>
          <Stack>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Checkbox colorScheme='black'>Balcon</Checkbox>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Checkbox colorScheme='black'>Terrasse</Checkbox>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Checkbox colorScheme='black'>Parking</Checkbox>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Checkbox colorScheme='black'>Ascenseur</Checkbox>
            </Box>
          </Stack>
        </RadioGroup>
        {/* <Text fontSize='sm'>- Balcon</Text>
            <Text fontSize='sm'>- Terrasse</Text>
            <Text fontSize='sm'>- Parking</Text>
            <Text fontSize='sm'>- Cave</Text>
            <Text fontSize='sm'>- Ascenseur</Text>
            <Text fontSize='sm'>- Gardien</Text>
            <Text fontSize='sm'>- Digicode</Text>
            <Text fontSize='sm'>- Interphone</Text>
            <Text fontSize='sm'>- Parquet</Text>
            <Text fontSize='sm'>- Cheminée</Text>
            <Text fontSize='sm'>- Cuisine équipée</Text>
            <Text fontSize='sm'>- Cuisine américaine</Text>
            <Text fontSize='sm'>- Cuisine séparée</Text>
            <Text fontSize='sm'>- Salle de bain</Text>
            <Text fontSize='sm'>- Salle d'eau</Text>
            <Text fontSize='sm'>- WC séparés</Text>
            <Text fontSize='sm'>- WC sur le palier</Text>
            <Text fontSize='sm'>- WC intégrés</Text>
            <Text fontSize='sm'>- WC japonais</Text>
            <Text fontSize='sm'>- WC suspendus</Text>
            <Text fontSize='sm'>- WC broyeur</Text>
            <Text fontSize='sm'>- WC chimiques</Text>
            <Text fontSize='sm'>- WC manuels</Text>
            <Text fontSize='sm'>- WC automatiques</Text>
            <Text fontSize='sm'>- WC à la turque</Text>
            <Text fontSize='sm'>- WC à la française</Text>
            <Text fontSize='sm'>- WC à la russe</Text>
            <Text fontSize='sm'>- WC à la chinoise</Text>
            <Text fontSize='sm'>- WC à la japonaise</Text>
            <Text fontSize='sm'>- WC à la coréenne</Text>
            <Text fontSize='sm'>- WC à la thaïlandaise</Text>
            <Text fontSize='sm'>- WC à la vietnamienne</Text>
            <Text fontSize='sm'>- WC à la mongole</Text>
            <Text fontSize='sm'>- WC à la népalaise</Text> */}

      </FormControl>
      <FormControl maxW={mawWInput}>
        <FormLabel>Nombre d'étage</FormLabel>
        <HookUsage value={floor} onValueChange={(newValue) => setFloor(newValue)} />
      </FormControl>

      <FormControl isRequired maxW={mawWInput}>
        <FormLabel>Quelle est l'adresse de votre bien ?</FormLabel>
        <AddressInput />
      </FormControl>

      <FormControl isRequired maxW={mawWInput}>
        <FormLabel>Quelle est le loyer de votre bien ?</FormLabel>
        <InputGroup size='sm' borderRadius='lg'>
          <Input borderRadius='lg' />
          <InputRightAddon borderEndRadius='lg' children='€' />
        </InputGroup>
        <FormHelperText>Le loyer comprend toutes les charges</FormHelperText>
      </FormControl>

      <FormControl maxW={mawWInput}>
        <FormLabel>Classe énergie</FormLabel>
        <HStack {...groupEnergryClass}>
          {optionsEnergyClass.map((value) => {
            const radio = getRadioPropsEnergyClass({ value: value.value })
            return (
              <RadioCard key={value.value} radioProps={radio} option={value}>
              </RadioCard>
            )
          })}
        </HStack>
        <FormHelperText>
          <Link href='https://www.ecologie.gouv.fr/diagnostic-performance-energetique-dpe' isExternal>
            En savoir plus
            <ExternalLinkIcon mx='2px' />
          </Link>
        </FormHelperText>
      </FormControl>

      <FormControl maxW={mawWInput}>
        <FormLabel>GES</FormLabel>
        <HStack {...groupEnergryClass}>
          {optionsGES.map((value) => {
            const radio = getRadioPropsGES({ value: value.value })
            return (
              <RadioCard key={value.value} radioProps={radio} option={value}>
              </RadioCard>
            )
          })}
        </HStack>
        <FormHelperText>
          <Link href='https://www.ecologie.gouv.fr/diagnostic-performance-energetique-dpe' isExternal>
            En savoir plus
            <ExternalLinkIcon mx='2px' />
          </Link>
        </FormHelperText>
      </FormControl>
      
    </VStack>
  );
};

export default Component1;
