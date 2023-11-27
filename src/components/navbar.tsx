import { Box, Flex, Button, Heading, Spacer, ButtonGroup, Container } from '@chakra-ui/react'
import { Placeholder } from './placeholder'

export const Navbar = () => {
  return (
    // <Box as="nav" role="navigation" bg="white">
    //   <Container>
    //     <Placeholder minH="20">Navigation</Placeholder>
    //   </Container>
    // </Box>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Heading size='md'>ICI Location</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Button colorScheme='teal'>Sign Up</Button>
        <Button colorScheme='teal'>Log in</Button>
      </ButtonGroup>
    </Flex>
  )
}