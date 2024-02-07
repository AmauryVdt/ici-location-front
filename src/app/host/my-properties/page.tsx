'use client'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, CardFooter, Center, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'
import { PropertyCard } from '@/components/host/propertyCard'
import { useRouter } from 'next/navigation'

export type Property = {
  id: string;
  title: string;
  description: string;
  price: string;
  images: { url: string }[];
}

const Advert: React.FC = () => {

  const router = useRouter()

  const { getToken } = useAuth();
  const [properties, setProperties] = React.useState<Property[]>([]);

  useEffect(() => {
    const getProperties = async () => {
      try{
        const token = await getToken();
        const apiUrl = process.env.NEXT_PUBLIC_API_URL

        if (!token) {
          throw new Error('No token found');
        }
        if (!apiUrl) {
          throw new Error('No API URL found');
        }

        const response = await fetch(`${apiUrl}/property/user`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        const data = await response.json();
        setProperties(data);
        if (!response.ok)
          throw new Error(`Server responded with ${response.status}`);
      }
      catch (error) {
        throw error;
      }
    }

    getProperties();
  }, [])

  return (
    <>
      <Container maxW='1100px' flex="1">
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Accueil</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Mon compte</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Mes annonces</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading py='5' as="h1" size='xl' noOfLines={1}>Mes annonces</Heading>
        <Stack spacing='5'>
        { !properties || properties.length === 0 && <Center flexDirection="column"><Text>Vous n&aposavez pas encore d&aposannonces (et c&aposest dommage).</Text><Button onClick={() => router.push('/host')} colorScheme='black' variant='outline'>Créer une annonce</Button></Center> }
        { !properties && Array(5).fill('').map((_, i) => <PropertyCard key={i} />) }
        { properties && properties.map((p, i) => <PropertyCard key={i} property={p} onPropertyDelete={() => setProperties(properties.filter(p2 => p2.id !== p.id))} />) }
        </Stack>
      </Container>
    </>
  )
}

export default Advert;