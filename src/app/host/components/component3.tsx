import { FormControl, FormHelperText, FormLabel, HStack, Input, Textarea, VStack } from '@chakra-ui/react';
import React from 'react';
import { Property, PropertyDescription } from '../page';

interface DescriptionProps {
    data: PropertyDescription;
    setData: React.Dispatch<React.SetStateAction<Property>>;
}

const Component3: React.FC<DescriptionProps> = ({ data, setData }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;
        const name = target.name;

        if (value.length > 500) return;
      
        setData(prevState => ({
          ...prevState,
          propertyDescription: {
            ...prevState.propertyDescription,
            [name]: value,
          }
        }));
      };

    return (
        <VStack spacing='30px'>
          <FormControl>
            <FormLabel>Choisisez un magnifique Titre</FormLabel>
            <HStack>
              <Input name='title' onChange={handleChange} value={data.title} placeholder='Magnifique studio en centre-ville' />
              <FormHelperText textAlign='right'>{data.title.length}/50</FormHelperText>
            </HStack>
          </FormControl>
          <FormControl>
          <FormLabel>Créez votre description</FormLabel>
            <HStack align="flex-end">
              <Textarea name='description' onChange={handleChange} value={data.description} placeholder='Studio en centre-ville, à deux pas des commerces, idéal pour étudiants, immeuble sécurisé.' />
              <FormHelperText textAlign='right'>{data.description.length}/500</FormHelperText>
            </HStack>
            <FormHelperText>Incluez les détails qui rendent votre bien unique</FormHelperText>
          </FormControl>
        </VStack>
        
    );
};

export default Component3;
