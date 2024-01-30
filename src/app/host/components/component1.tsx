import HookUsage from '@/components/hookUsage';
import { Radio, HStack, VStack, Text, RadioGroup, FormControl, FormLabel, Input, FormHelperText, InputGroup, InputRightAddon, Box, FormErrorMessage, Heading, List, ListItem, Checkbox, Stack, useRadioGroup, Link, CheckboxGroup } from '@chakra-ui/react';
import React from 'react';
import AddressInput from '@/components/addressInput';
import RadioCard, { RadioOption } from '@/components/radioCard';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Property, PropertyInformation } from '../page';

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

  const handleNumberChangev2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const NULLABLE_POSITIVE_INTEGER_REGEX = /^\d*$/;

    const strToPositiveInteger = (str: string): number | null => {
        const num = parseInt(str, 10);
        return Number.isNaN(num) ? null : num;
    }
    
    if(NULLABLE_POSITIVE_INTEGER_REGEX.test(e.target.value)) {
      e.target.value = strToPositiveInteger(e.target.value)?.toString() ?? '0';
      handleChange(e);
    }
    else
      e.preventDefault();
  }

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
    console.log('nextValue', nextValue);
    console.log('data.propertyType', data.propertyType);
    console.log(['house, apartment'].includes(data.propertyType))
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

  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const isError = !data.totalArea || data.totalArea < 9

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
    defaultValue: data.energyClass,
    onChange: handleStringChange('energyClass'),
  })
  const { getRootProps: getRootPropsGES, getRadioProps: getRadioPropsGES } = useRadioGroup({
    name: 'framework',
    defaultValue: data.ges,
    onChange: handleStringChange('ges'),
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
              <Radio value='apartment'>Appartement</Radio>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Radio value='house'>Maison</Radio>
            </Box>
            <Box py='1' px='5' borderRadius='md' border='1px' borderColor='lightgray'>
              <Radio value='parking'>Parking</Radio>
            </Box>
          </HStack>
        </RadioGroup>
      </FormControl>

      {['house', 'apartment'].includes(data.propertyType) && (
      <FormControl isRequired isInvalid={isFocused && isError} maxW={mawWInput}>
        <FormLabel>Quel est la surface habitable de votre bien ?</FormLabel>
        <InputGroup size='sm' borderRadius='lg'>
          <Input name="livingArea" onBlur={handleFocus} value={data.livingArea} onChange={handleNumberChangev2} borderRadius='lg' />
          <InputRightAddon borderEndRadius='lg'>
            m²
          </InputRightAddon>
        </InputGroup>
        {isFocused && isError && <FormErrorMessage>La surface n&apos;est pas conforme à la loi Carrez.</FormErrorMessage>}
      </FormControl>
      )}

      {['house'].includes(data.propertyType) && (
      <FormControl maxW={mawWInput}>
        <FormLabel>Quel est la surface total de votre bien ?</FormLabel>
        <InputGroup size='sm' borderRadius='lg'>
          <Input name="totalArea" onBlur={handleFocus} value={data.totalArea} onChange={handleNumberChangev2} borderRadius='lg' />
          <InputRightAddon borderEndRadius='lg'>
            m²
          </InputRightAddon>
        </InputGroup>
      </FormControl>
      )}

      {['house', 'apartment'].includes(data.propertyType) && (
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
      )}

      {['house', 'apartment'].includes(data.propertyType) && (
      <FormControl isRequired maxW={mawWInput}>
        <FormLabel>Combien y a-t-il de pièces ?</FormLabel>
        <HookUsage value={data.rooms} onValueChange={handleNumberChange('rooms')} />
        <FormHelperText>La cuisine, la salle de bain et les toilettes ne sont pas à prendre en compte.</FormHelperText>
      </FormControl>
      )}

      {['apartment'].includes(data.propertyType) && (

      <FormControl as='fieldset' maxW={mawWInput}>
        <FormLabel as='legend'>
          Votre bien possède-t-il un Ascenseur ?
        </FormLabel>
        <RadioGroup onChange={handleRadioChange('lift')} value={data.lift.toString()} colorScheme='black'>
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
      )}

      {['apartment'].includes(data.propertyType) && (

      <FormControl maxW={mawWInput}>
        <FormLabel>Combien y a-t-il d'étage(s) ?</FormLabel>
        <HookUsage value={data.floorsNumber} onValueChange={handleNumberChange('floorsNumber')} />
      </FormControl>
      )}

      {['house', 'apartment'].includes(data.propertyType) && (

      <FormControl maxW={mawWInput}>
        <FormLabel>A quelle étage se situe votre bien ?</FormLabel>
        <HookUsage value={data.floor} onValueChange={handleNumberChange('floor')} />
      </FormControl>
      )}

      {['house', 'apartment'].includes(data.propertyType) && (

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
      </FormControl>
      )}

      <FormControl isRequired maxW={mawWInput}>
        <FormLabel>Quelle est l&apos;adresse de votre bien ?</FormLabel>
        <AddressInput inputValue2={data.address} onValueChange={handleStringChange('address')} />
      </FormControl>

      <FormControl isRequired maxW={mawWInput}>
        <FormLabel>Quelle est le loyer de votre bien ?</FormLabel>
        <InputGroup size='sm' borderRadius='lg'>
          <Input name="price" onBlur={handleFocus} value={data.price} onChange={handleNumberChangev2} borderRadius='lg' />
          <InputRightAddon borderEndRadius='lg'>
            €
          </InputRightAddon>
        </InputGroup>
        <FormHelperText>Le loyer comprend toutes les charges</FormHelperText>
      </FormControl>

      {['house', 'apartment'].includes(data.propertyType) && (
      <FormControl maxW={mawWInput}>
        <FormLabel>Classe énergie</FormLabel>
        <HStack {...groupEnergryClass}>
          {optionsEnergyClass.map((value) => {
            const radio = getRadioPropsEnergyClass({ value: value.value })
            return (
              <RadioCard key={value.value} radioProps={radio} option={value} />
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
      )}

      {['house', 'apartment'].includes(data.propertyType) && (

      <FormControl maxW={mawWInput}>
        <FormLabel>GES</FormLabel>
        <HStack {...groupGES}>
          {optionsGES.map((value) => {
            const radio = getRadioPropsGES({ value: value.value })
            return (
              <RadioCard key={value.value} radioProps={radio} option={value} />
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
      )}

      {['house', 'apartment', 'parking'].includes(data.propertyType) && (
      <FormControl maxW={mawWInput}>
        <FormLabel>Combien de place de parking votre bien possède-t-il ?</FormLabel>
        <HookUsage value={data.parking} onValueChange={handleNumberChange('parking')} />
      </FormControl>
      )}

    </VStack>
  );
};

export default Component1;



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