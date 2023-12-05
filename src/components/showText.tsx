'use client'
import { Collapse, Button, Box, Spacer } from '@chakra-ui/react'
import React, { useEffect } from 'react'

type ShowTextProps = {
    text: string;
  };

const ShowText: React.FC<ShowTextProps> = ({ text }) => {
    const [show, setShow] = React.useState(false)
  
    const handleToggle = () => {setShow(!show); console.log(show)}

    return (
      <>
        <Collapse startingHeight={100} in={show} >
          {text}
        </Collapse>
        <Box w='full' display="flex" justifyContent="flex-end">
          <Button size='sm' onClick={() => { console.log('Bouton cliqué'); handleToggle(); }} mt='1rem'>
            Voir {show ? 'moins' : 'plus'}
          </Button>
        </Box>
      </>
    )
}

export default ShowText;