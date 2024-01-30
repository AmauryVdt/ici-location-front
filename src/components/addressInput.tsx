// components/AddressInput.tsx
import React, { useState, ChangeEvent } from 'react';
import { Input, List, ListItem, Box } from '@chakra-ui/react';

interface Address {
  properties: {
    label: string;
  };
}

interface AddressInputProps {
  inputValue2: string;
  onValueChange: (address: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ inputValue2, onValueChange }) => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  // const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const fetchAddresses = async (value: string) => {
    try {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${value}&limit=5`);
      const data = await response.json();
      setAddresses(data.features);
    } catch (error) {
      console.error('Erreur lors de la récupération des adresses:', error);
      setAddresses([]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // setInputValue(value);
    onValueChange(value);
    if (value.length > 2) {
      fetchAddresses(value);
    } else {
      setAddresses([]);
    }
  };

  const handleAddressSelect = (address: string) => {
    // setInputValue(address);
    onValueChange(address);
    setAddresses([]);
  };

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div>
      <Input
        value={inputValue2}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder="Entrez une adresse"
        size="sm"
        borderRadius="md"
      />
      { isFocused && addresses.length > 0 && (
        <Box boxShadow='dark-lg' borderRadius='lg'>
            <List>
            {addresses.map((address, index) => (
                <ListItem
                px='5'
                py='1'
                border='1px'
                borderColor='lightgray'
                key={index} 
                cursor="pointer"
                onClick={() => {handleAddressSelect(address.properties.label)}}>
                {address.properties.label}
                </ListItem>
            ))}
            </List>
        </Box>
      )}
    </div>
  );
};

export default AddressInput;
