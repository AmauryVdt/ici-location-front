import { Box, Button, Flex, Text, Divider, IconButton, LinkBox, LinkOverlay, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, HStack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import React from 'react';
import { Navbar } from './navbar';

const SearchBar: React.FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <LinkBox onClick={onOpen} cursor='pointer'>
                <Flex bg="white" h="40px" align="center" borderRadius="full" boxShadow="0 0 0 1px rgba(0, 0, 0, 0.1)" overflow="hidden">
                    <Box textAlign="center" p={4}>
                        <Text>N&apos;importe où</Text>
                    </Box>

                    <Divider h="30px" color='lightgray' orientation="vertical" />

                    <Box textAlign="center" p={4}>
                        <Text>Le type de bien</Text>
                    </Box>

                    <Divider h="30px" color='lightgray' orientation="vertical" />

                    <Box textAlign="center" p={4}>
                        <Text>Quel budget</Text>
                    </Box>

                    <IconButton
                        aria-label='Search'
                        icon={<Search2Icon />}
                        isRound={true}
                        size='md'
                        colorScheme='black' />
                </Flex>
            </LinkBox>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Navbar isSearchBarDisplayed={false} />

                    <Box py='40px'></Box>

                    <DrawerBody display='flex' w='full' alignItems='center' justifyContent='center'>
                        <HStack spacing='10px' p='5' maxW='700px' align='center'>
                            <Input borderRadius='full' placeholder="N'importe où" />
                            <Input borderRadius='full' placeholder='Le type de bien' />
                            <Input borderRadius='full' placeholder='Quel budget' />
                            <IconButton
                                type='submit'
                                aria-label='Search'
                                icon={<Search2Icon />}
                                isRound={true}
                                size='md'
                                colorScheme='black' />
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default SearchBar;