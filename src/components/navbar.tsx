import { Box, Flex, Button, Heading, Spacer, ButtonGroup, Divider, Link } from '@chakra-ui/react'
import SearchBar from '@/components/searchBar'

export const Navbar = () => {
  return (
    <Flex position='fixed' bg='white' direction='column' w='full' zIndex={10}>
      <Flex minWidth='max-content' alignItems='center' gap='2' position="static" padding={ '15px' } px={10}>
        <Box p='2'>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <Heading size='md'>ICI Location</Heading>
          </Link>
        </Box>
        <Spacer />
        <SearchBar />
        <Spacer />
        <ButtonGroup size='sm' gap='3'>
          <Link href='/hosts'>
            <Button w='full' colorScheme='gray' variant='ghost'>Mettre mon bien en ligne</Button>
          </Link>
          <Button colorScheme='gray' variant='ghost'>Inscription</Button>
          <Button colorScheme='black' variant='solid'>Connexion</Button>
        </ButtonGroup>
      </Flex>
      <Divider margin={ '0 0 0 1%' } w='98%' color='lightgray' />
    </Flex>
  )
}