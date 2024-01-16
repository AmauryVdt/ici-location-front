
import { Container, Heading, Flex, Grid, GridItem, Img, Text, Card, CardHeader, Avatar, Box, IconButton, CardBody, Button, SimpleGrid, StackDivider, VStack, AspectRatio, Input, Badge } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Metadata } from 'next'
import dynamic from 'next/dynamic';
const ShowText = dynamic(() => import('@/components/showText'), {
    ssr: false,
  });import Link from 'next/link'
import { Features } from '@/components/features'


export const metadata: Metadata = {
  title: 'Appartement 133m2 à louer à Paris 75000',
}

const text: string = "Appartement Lumineux et Moderne de 2 Chambres en Centre-Ville"

+ "Localisation : Situé au cœur de la ville, à quelques pas des commerces, restaurants, et transports en commun."
+ "Taille : 75 m²."
+ "Chambres : 2 chambres spacieuses, chacune avec un grand lit double, des armoires encastrées, et de grandes fenêtres offrant une vue sur la ville."
+ "Salon : Un salon ouvert et lumineux avec un canapé confortable, une table basse, et une télévision à écran plat. Accès à un balcon avec vue urbaine."
+ "Cuisine : Cuisine moderne entièrement équipée avec réfrigérateur, four, micro-ondes, lave-vaisselle, et une variété d'ustensiles de cuisine."
+ "Salle de bain : Salle de bain contemporaine avec douche à l'italienne, WC, et lavabo. Carrelage moderne et luminaire élégant."
+ "Autres caractéristiques : Connexion Wi-Fi haut débit, système de chauffage central, double vitrage, et accès sécurisé à l'immeuble."
+ "Prix : 1 200 € par mois, charges non comprises."
+ "Conditions de location : Contrat de location d'un an minimum, dépôt de garantie de 2 mois de loyer, preuve de revenu requise."
+ "Cet appartement représente une opportunité exceptionnelle pour ceux qui cherchent un logement confortable et moderne au cœur de la ville. Parfait pour les professionnels ou les petites familles. Visites disponibles sur demande."

export default function Propertie({ params }: { params: { id: string } }) {
  return (
      <Flex flexDirection='column'>
          {/* Pictures */}
          <Container maxW='1200px' px='50px'>
              <Heading as='h1' size='lg'>Appartement 133m2 à louer à Paris 75000</Heading>
              <Grid
                  h='400px'
                  templateRows='repeat(2, 1fr)'
                  templateColumns='repeat(4, 1fr)'
                  gap={2}
                  py='30px'
                  flex={1}
                  position='static'
              >
                  <GridItem
                      borderRadius='20px 0px 0px 20px'
                      rowSpan={2}
                      colSpan={2}
                      bgImage="url('https://picsum.photos/720/540')"
                      bgPosition="center"
                      bgRepeat="no-repeat"
                      bgSize="cover">
                  </GridItem>
                  <GridItem
                      colSpan={1}
                      bgImage="url('https://picsum.photos/710/533')"
                      bgPosition="center"
                      bgRepeat="no-repeat"
                      bgSize="cover">
                  </GridItem>
                  <GridItem
                      borderRadius='0px 20px 0px 0px'
                      colSpan={1}
                      bgImage="url('https://picsum.photos/700/527')"
                      bgPosition="center"
                      bgRepeat="no-repeat"
                      bgSize="cover">
                  </GridItem>
                  <GridItem
                      colSpan={1}
                      bgImage="url('https://picsum.photos/730/547')"
                      bgPosition="center"
                      bgRepeat="no-repeat"
                      bgSize="cover">
                  </GridItem>
                  <GridItem
                      borderRadius='0px 0px 20px 0px'
                      colSpan={1}
                      bgImage="url('https://picsum.photos/760/554')"
                      bgPosition="center"
                      bgRepeat="no-repeat"
                      bgSize="cover">
                  </GridItem>
              </Grid>
          </Container>
          {/* Description */}
          <Container maxW='1200px' px='50px'>
              <Grid
                  templateColumns='repeat(3, 1fr)' gap={8}>
                  {/* Information */}
                  <GridItem colSpan={2}>
                      <VStack align={'start'} spacing={4} divider={<StackDivider borderColor='gray.200' />} >
                          <VStack align={'start'} spacing={4}>
                              <Heading as='h2' size='md'>Appartement 133m2 à louer à Paris 75000</Heading>
                              <Text fontSize='md'>1 Pièce · 40 m² · Amiens 80000 · Quartier Saint-Anne - Fb Noyon</Text>
                              <Text as='b' fontSize='xl'>2 285 € cc</Text>
                              <Text color='gray' fontSize='sm'>Publié le 12/05/2021</Text>
                          </VStack>
                          <VStack align={'start'} spacing={4}>
                              <Heading as='h2' size='md'>Description</Heading>
                              <Text>
                                <ShowText text={text} />
                              </Text>
                          </VStack>
                          <VStack align={'start'} spacing={4}>
                              <Heading as='h2' size='md'>Critères</Heading>
                                <SimpleGrid columns={4} spacing={4}>
                                    <Features title='Type de bien' text='Appartement' />
                                    <Features title='Meublé' text='Non' />
                                    <Features title='Surface' text='133 m²' />
                                    <Features title='Pièces' text='4' />
                                    <Features title='Chambres' text='3' />
                                    <Features title='Salle de bain' text='2' />
                                    <Features title='WC' text='2' />
                                    <Features title='Étage' text='3' />
                                    <Features title='Cuisine équipée' text='Oui' />
                                    <Features title='Classe énergie' text='C' />
                                    <Features title='GES' text='A' />
                                </SimpleGrid>
                          </VStack>
                          <VStack align={'start'} spacing={4} w='full'>
                              <Heading as='h2' size='md'>Où se situe le logement</Heading>
                              <AspectRatio ratio={16 / 9} w='full'>
                                  <iframe
                                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                                  />
                              </AspectRatio>
                          </VStack>
                          <VStack id='rdv' align={'start'} spacing={4}>
                              <Heading as='h2' size='md'>Visiter l&apos;appartement</Heading>
                              <Input
                                  placeholder="Select Date and Time"
                                  size="md"
                                  type="datetime-local"
                                  step='3600'
                              />
                              <input id="appt-time" type="time" name="appt-time" step="3600" />
                          </VStack>
                          <VStack align={'start'} spacing={4}>
                              <Heading as='h2' size='md'>Autres</Heading>
                          </VStack>
                      </VStack>
                  </GridItem>
                  {/* Contact */}
                  <GridItem colSpan={1}>
                      <Card>
                          <CardHeader>
                              <Flex >
                                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                      <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                      <Box>
                                          <Heading size='sm'>
                                              Segun Adebayo
                                              <Badge ml='1' variant='outline' colorScheme='blue'>
                                                  Pro
                                              </Badge>
                                          </Heading>
                                          <Text>3 annonces</Text>
                                      </Box>
                                  </Flex>
                                  <IconButton
                                      variant='ghost'
                                      colorScheme='gray'
                                      aria-label='See menu'
                                      icon={<BsThreeDotsVertical />}
                                  />
                              </Flex>
                          </CardHeader>
                          <CardBody>
                              <SimpleGrid columns={1} spacing={1}>
                                  <Button colorScheme='black' variant='solid'>Contacter</Button>
                                  <Link href='#rdv'>
                                    <Button w='full' colorScheme='black' variant='outline'>Prendre Rendez-Vous</Button>
                                  </Link>
                              </SimpleGrid>
                          </CardBody>
                      </Card>
                  </GridItem>
              </Grid>
          </Container>
      </Flex>
  )
}