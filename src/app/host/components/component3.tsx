import { FormControl, FormHelperText, FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react';

const Component3: React.FC = () => {
    return (
        <FormControl>
            <FormLabel>Créez votre description</FormLabel>
            <Textarea placeholder='Studio en centre-ville, à deux pas des commerces, idéal pour étudiants, immeuble sécurisé.' />
            <FormHelperText>Incluez les détails qui rendent votre bien unique</FormHelperText>
        </FormControl>
    );
};

export default Component3;
