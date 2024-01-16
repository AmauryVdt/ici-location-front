import HookUsage from '@/components/hookUsage';
import { Radio, HStack, VStack, Text, RadioGroup, FormControl, FormLabel, Input, FormHelperText, InputGroup, InputRightAddon, Box, FormErrorMessage, Heading, List, ListItem, Checkbox, Stack, useRadioGroup, Link, CheckboxGroup } from '@chakra-ui/react';
import React from 'react';
import AddressInput from '@/components/addressInput';
import RadioCard, { RadioOption } from '@/components/radioCard';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Property, PropertyInformation } from '../page';

// interface HookUsageProps {
//   features: Features;
//   onValueChange: (value: Features) => void;
// }

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement; // Cast to HTMLInputElement to get access to `checked`
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // TODO: mettre la logique du chiffre entier ici à la palce de hookusage

    // console.log('name', name);
    // console.log('value', value);
    // console.log('e', e);
    // console.log('target', target);
    // console.log('target.type', target.type);
  
    setData(prevState => ({
      ...prevState,
      propertyInformation: {
        ...prevState.propertyInformation,
        [name]: value,
      }
    }));
  };

  const handleNumberChange = (name: string) => (nextValue: number | null) => {
    setData(prevState => ({
      ...prevState,
      propertyInformation: {
        ...prevState.propertyInformation,
        [name]: nextValue
      }
    }));
  }

  const handleRadioChange = (name: string) => (nextValue: string | number | boolean) => {
    setData(prevState => ({
      ...prevState,
      propertyInformation: {
        ...prevState.propertyInformation,
        [name]: nextValue
      }
    }));
  };

  const handleStringChange = (name: string) => (nextValue: string) => {
    setData(prevState => ({
      ...prevState,
      propertyInformation: {
        ...prevState.propertyInformation,
        [name]: nextValue
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

  const isError = !data.area || data.area < 9

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
        <RadioGroup onChange={handleRadioChange('propertyType')} value={data.propertyType} colorScheme='black'>
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
          <Input name="area" onBlur={handleFocus} value={data.area} onChange={handleChange} borderRadius='lg' />
          <InputRightAddon borderEndRadius='lg'>
            m²
          </InputRightAddon>
        </InputGroup>
        {isFocused && isError && <FormErrorMessage>La surface n&apos;est pas conforme à la loi Carrez.</FormErrorMessage>}
      </FormControl>

      <FormControl as='fieldset' maxW={mawWInput}>
        <FormLabel as='legend'>
          Votre bien est-il meublé ?
        </FormLabel>
        <RadioGroup onChange={handleRadioChange('furnished')} value={data.furnished.toString()} colorScheme='black'>
          <HStack>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Radio value='true'>Oui</Radio>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Radio value='false'>Non</Radio>
            </Box>
          </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl isRequired maxW={mawWInput}>
        <FormLabel>Combien y a-t-il de pièces ?</FormLabel>
        <HookUsage value={data.rooms} onValueChange={handleNumberChange('rooms')} />
        <FormHelperText>La cuisine, la salle de bain et les toilettes ne sont pas à prendre en compte.</FormHelperText>
      </FormControl>

      {/* Pas encore set */}
      <FormControl maxW={mawWInput}>
        <FormLabel>Combien y a-t-il de chambres ?</FormLabel>
        <HookUsage value={bedroom} onValueChange={(newValue) => setBedroom(newValue)} />
      </FormControl>

      <FormControl maxW={mawWInput}>
        <FormLabel>Quels sont les avantages ?</FormLabel>
        <CheckboxGroup colorScheme='black'>
          <Stack maxW='150px'>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Checkbox name='balcony' isChecked={data.balcony} onChange={handleChange}>Balcon</Checkbox>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Checkbox name='terrace' isChecked={data.terrace} onChange={handleChange}>Terrasse</Checkbox>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Checkbox name='garden' isChecked={data.garden} onChange={handleChange}>Garden</Checkbox>
            </Box>
          </Stack>
        </CheckboxGroup>
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

      {/* No set yet */}
      <FormControl maxW={mawWInput}>
        <FormLabel>Nombre d&apos;étage</FormLabel>
        <HookUsage value={floor} onValueChange={(newValue) => setFloor(newValue)} />
      </FormControl>

      <FormControl isRequired maxW={mawWInput}>
        <FormLabel>Quelle est l&apos;adresse de votre bien ?</FormLabel>
        <AddressInput inputValue2={data.address} onValueChange={handleStringChange('address')} />
      </FormControl>

      <FormControl isRequired maxW={mawWInput}>
        <FormLabel>Quelle est le loyer de votre bien ?</FormLabel>
        <InputGroup size='sm' borderRadius='lg'>
          <Input name="price" onBlur={handleFocus} value={data.price} onChange={handleChange} borderRadius='lg' />
          <InputRightAddon borderEndRadius='lg'>
            €
          </InputRightAddon>
        </InputGroup>
        <FormHelperText>Le loyer comprend toutes les charges</FormHelperText>
      </FormControl>

      <FormControl maxW={mawWInput}>
        <FormLabel>Classe énergie</FormLabel>
        <HStack {...groupEnergryClass}>
          {optionsEnergyClass.map((value) => {
            const radio = getRadioPropsEnergyClass({ value: value.value })
            return (
              <RadioCard key={value.value} radioProps={radio} option={value} />
              // </RadioCard>
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
        <HStack {...groupGES}>
          {optionsGES.map((value) => {
            const radio = getRadioPropsGES({ value: value.value })
            return (
              <RadioCard key={value.value} radioProps={radio} option={value} />
              // </RadioCard>
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
