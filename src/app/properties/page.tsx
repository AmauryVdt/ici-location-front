'use client'

import { Box, Button, Center, Container, HStack, Input, SimpleGrid, useDisclosure, Drawer, DrawerOverlay, DrawerContent, VStack, Heading, ButtonGroup, CheckboxGroup, Spacer, Checkbox, Text, DrawerHeader, DrawerCloseButton, DrawerBody, Divider } from '@chakra-ui/react';
import { Card2 } from '@/components/card2';
import React from 'react';
import { MdFilterList } from 'react-icons/md';

const Properties: React.FC = () => {

    const cards = Array.from({ length: 17 }, (_, index) => index + 1);
    const { isOpen, onOpen, onClose } = useDisclosure() 

    return (
        <Container maxW='1200px'>
            <Center maxW='full' paddingBottom='10'>
                <HStack spacing='10px' align='center'>
                    <Input borderRadius='full' placeholder="N'importe où" />
                    <Input borderRadius='full' placeholder='Le type de bien' />
                    <Input borderRadius='full' placeholder='Quel budget' />
                    <Button onClick={onOpen} borderRadius='full' w='300px' leftIcon={<MdFilterList />} colorScheme='black' variant='outline'>
                        Filtre
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />

                            <DrawerHeader borderBottomWidth='1px'>
                                Plus de filtres
                            </DrawerHeader>
                            <DrawerBody>
                                <VStack divider={<Divider/>} pt='20px' spacing='30px' align='center' alignItems='flex-start'>
                                    <Box w='full'>
                                        <Heading as='h6' pb='2' size='sm'>Nombre de pièce(s)</Heading>
                                        <HStack>
                                            <ButtonGroup size='sm' colorScheme='black' variant='outline'>
                                                <Button>1</Button>
                                                <Button>2</Button>
                                                <Button>3</Button>
                                                <Button>4</Button>
                                                <Button>5</Button>
                                                <Button>6+</Button>
                                            </ButtonGroup>
                                        </HStack>
                                    </Box>
                                    <Box w='full'>
                                        <Heading as='h6' pb='2' size='sm'>Nombre de chambre(s)</Heading>
                                        <HStack>
                                            <ButtonGroup size='sm' colorScheme='black' variant='outline'>
                                                <Button>1</Button>
                                                <Button>2</Button>
                                                <Button>3</Button>
                                                <Button>4</Button>
                                                <Button>5</Button>
                                                <Button>6+</Button>
                                            </ButtonGroup>
                                        </HStack>
                                    </Box>
                                    <Box w='full'>
                                        <Heading as='h6' pb='2' size='sm'>Type de bien</Heading>
                                        <CheckboxGroup colorScheme='black' variant='outline' size='lg'>
                                            <VStack w='full'>
                                                <HStack w='full'>
                                                    <Text>Maison</Text>
                                                    <Spacer />
                                                    <Checkbox value='maison' />
                                                </HStack>
                                                <HStack w='full'>
                                                    <Text>Appartement</Text>
                                                    <Spacer />
                                                    <Checkbox value='appartement' />
                                                </HStack>
                                                <HStack w='full'>
                                                    <Text>Studio</Text>
                                                    <Spacer />
                                                    <Checkbox value='studio' />
                                                </HStack>
                                                <HStack w='full'>
                                                    <Text>Loft</Text>
                                                    <Spacer />
                                                    <Checkbox value='loft' />
                                                </HStack>
                                            </VStack>
                                        </CheckboxGroup>
                                    </Box>
                                    <Box w='full'>
                                        <Heading as='h6' pb='2' size='sm'>Les avantage(s)</Heading>
                                        <CheckboxGroup colorScheme='black' variant='outline'>
                                            <SimpleGrid columns={2} spacing='10px'>
                                                <Checkbox value='balcon'>Balcon</Checkbox>
                                                <Checkbox value='terrace'>Terrasse</Checkbox>
                                                <Checkbox value='parking'>Parking</Checkbox>
                                                <Checkbox value='lift'>Ascenceur</Checkbox>
                                                <Checkbox value='other'>Autre</Checkbox>
                                            </SimpleGrid>
                                        </CheckboxGroup>
                                    </Box>
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    {/* <Menu placement='bottom-end' direction='rtl' flip={true}>
                        <MenuButton as={Button} borderRadius='full' w='300px' leftIcon={<MdFilterList />} colorScheme='black' variant='outline'>
                            Filtre
                        </MenuButton>
                        <MenuList>
                            <Container maxWidth='500px' minW='350px'>
                                <VStack spacing='30px' align='center' alignItems='flex-start'>
                                    <Heading as='h2' size='md'>Plus de filtres</Heading>
                                    <Box w='full'>
                                        <Heading as='h6' pb='2' size='sm'>Nombre de pièce(s)</Heading>
                                        <HStack>
                                            <ButtonGroup size='sm' colorScheme='black' variant='outline'>
                                                <Button>1</Button>
                                                <Button>2</Button>
                                                <Button>3</Button>
                                                <Button>4</Button>
                                                <Button>5</Button>
                                                <Button>6+</Button>
                                            </ButtonGroup>
                                        </HStack>
                                    </Box>
                                    <Box w='full'>
                                        <Heading as='h6' pb='2' size='sm'>Nombre de chambre(s)</Heading>
                                        <HStack>
                                            <ButtonGroup size='sm' colorScheme='black' variant='outline'>
                                                <Button>1</Button>
                                                <Button>2</Button>
                                                <Button>3</Button>
                                                <Button>4</Button>
                                                <Button>5</Button>
                                                <Button>6+</Button>
                                            </ButtonGroup>
                                        </HStack>
                                    </Box>
                                    <Box w='full'>
                                        <Heading as='h6' pb='2' size='sm'>Type de bien</Heading>
                                        <CheckboxGroup colorScheme='black' variant='outline' size='lg'>
                                            <VStack w='full'>
                                                <HStack w='full'>
                                                    <Text>Maison</Text>
                                                    <Spacer />
                                                    <Checkbox value='maison' />
                                                </HStack>
                                                <HStack w='full'>
                                                    <Text>Appartement</Text>
                                                    <Spacer />
                                                    <Checkbox value='appartement' />
                                                </HStack>
                                                <HStack w='full'>
                                                    <Text>Studio</Text>
                                                    <Spacer />
                                                    <Checkbox value='studio' />
                                                </HStack>
                                                <HStack w='full'>
                                                    <Text>Loft</Text>
                                                    <Spacer />
                                                    <Checkbox value='loft' />
                                                </HStack>
                                            </VStack>
                                            </CheckboxGroup>
                                    </Box>
                                    <Box w='full'>
                                        <Heading as='h6' pb='2' size='sm'>Les avantage(s)</Heading>
                                        <CheckboxGroup colorScheme='black' variant='outline'>
                                            <SimpleGrid columns={2} spacing='10px'>
                                                <Checkbox value='balcon'>Balcon</Checkbox>
                                                <Checkbox value='terrace'>Terrasse</Checkbox>
                                                <Checkbox value='parking'>Parking</Checkbox>
                                                <Checkbox value='lift'>Ascenceur</Checkbox>
                                                <Checkbox value='other'>Autre</Checkbox>
                                            </SimpleGrid>
                                        </CheckboxGroup>
                                    </Box>
                                </VStack>
                            </Container>
                        </MenuList>
                    </Menu> */}
                </HStack>
            </Center>
            <SimpleGrid minChildWidth='280px'>
                {cards.map((card, index) => (
                    <Card2 key={index} />
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Properties;
