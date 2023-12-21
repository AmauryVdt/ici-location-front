import { Box, Flex, Button, Heading, Spacer, ButtonGroup, Divider, Link } from '@chakra-ui/react'
import SearchBar from '@/components/searchBar'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { frFR } from "@clerk/localizations";

interface NavbarProps {
  isSearchBarDisplayed: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isSearchBarDisplayed }: NavbarProps) => {

  return (
    <Flex position='fixed' bg='white' direction='column' w='full' zIndex={10}>
      <Flex minWidth='max-content' alignItems='center' gap='2' position="static" padding={ '15px' } px={10}>
        <Box p='2'>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <Heading size='md'>ICI Location</Heading>
          </Link>
        </Box>
        <Spacer />
        { isSearchBarDisplayed && <SearchBar />}
        <Spacer />
        <ButtonGroup size='sm' gap='3'>
          <Link href='/host'>
            <Button w='full' colorScheme='gray' variant='ghost'>Mettre mon bien en ligne</Button>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href='/sign-up'>
              <Button  colorScheme='gray' variant='ghost'>Inscription</Button>
            </Link>
            <Link href='/sign-in'>
              <Button colorScheme='black' variant='solid'>Connexion</Button>
            </Link>
          </SignedOut>
        </ButtonGroup>
      </Flex>
      <Divider margin={ '0 0 0 1%' } w='98%' color='lightgray' />
    </Flex>
  )
}