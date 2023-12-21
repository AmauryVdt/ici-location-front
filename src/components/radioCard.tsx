import { useRadio, useRadioGroup, Box, HStack } from '@chakra-ui/react';
import React from 'react';

interface RadioCardProps {
  option: RadioOption;
  // children: React.ReactNode;
  radioProps: ReturnType<ReturnType<typeof useRadioGroup>["getRadioProps"]>
}

export type RadioOption = {
  value: string;
  bgColor: string;
}

// 1. Créer un composant qui consomme le hook `useRadio`
const RadioCard: React.FC<RadioCardProps> = ({ radioProps, option }) => {
  const { getInputProps, getRadioProps } = useRadio(radioProps)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='full'
        boxShadow='md'
        _checked={{
          bg: option.bgColor,
          color: 'white',
          borderColor: option.bgColor,
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        _hover={{
          bg: option.bgColor,
          color: 'white',
          borderColor: option.bgColor,
        }}
        px={5}
        py={1}
      >
        {option.value}
      </Box>
    </Box>
  )
}
export default RadioCard;