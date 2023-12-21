import { Text, Stack } from '@chakra-ui/react';
import React from 'react';

interface FeaturesProps {
    title: string,
    text: string | number,
    category?: string,
    icone?: string,
}

export const Features = ({ title, text }: FeaturesProps ) => { 
    return (
        <Stack direction='column'>
            <Text as='p' fontSize='xs'>{title}</Text>
            <Text as='h3' fontSize='md' fontWeight='bold'>{text}</Text>
        </Stack>
    )
}