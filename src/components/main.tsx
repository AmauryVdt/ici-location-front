import { Container, Flex, FlexProps, Img, SimpleGrid, Center } from '@chakra-ui/react'
import { Card2 } from '@/components/card2'

import localImage from '../assets/landing-picture.png';

export const Main = () => {
  return (
    // <Flex as="main" role="main" direction="column" flex="1" py="100px" {...props}>
    <>
      <Container maxW='1100px' flex="1">
        <Img borderRadius='25px' src={localImage.src} alt='Menu Image' />
      </Container>
      <Container padding={'50px 0px 50px 0px'} maxW='900px' flex="1">
        <Center textAlign='center' fontSize='6xl'>Trouver la maison de vos rêves</Center>
        <Center textAlign='center' fontSize='lg'>Plongez en profondeur et parcourez les maisons à louer, les photos originales du quartier, les avis des résidents et les informations locales pour trouver ce qui vous convient le mieux.</Center>
      </Container>
      <Container maxW='1200px'>
        <SimpleGrid minChildWidth='280px'>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </SimpleGrid>
      </Container>
    </>
    // </Flex>
  )
}