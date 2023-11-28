import { Box, Flex, Button, Heading, Spacer, ButtonGroup, Divider } from '@chakra-ui/react'
import SearchBar from '@/components/searchBar'

export const Navbar = () => {
  return (
    <Flex position='fixed' bg='white' direction='column' w='full'>
      <Flex minWidth='max-content' alignItems='center' gap='2' position="static" padding={ '10px' }>
        <Box p='2'>
          <Heading size='md'>ICI Location</Heading>
        </Box>
        <Spacer />
        <SearchBar />
        <Spacer />
        <ButtonGroup size='sm' gap='3'>
          <Button colorScheme='gray' variant='ghost'>Mettre son bien en ligne</Button>
          <Button colorScheme='gray' variant='ghost'>Inscription</Button>
          <Button colorScheme='black' variant='solid'>Connexion</Button>
        </ButtonGroup>
      </Flex>
      <Divider margin={ '0 0 0 1%' } w='98%' color='lightgray' />
    </Flex>
  )
}