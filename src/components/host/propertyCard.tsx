import React from "react";
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text, HStack, useToast } from "@chakra-ui/react";
import { Property } from "@/app/host/my-properties/page";
import { useAuth } from "@clerk/nextjs";

interface PropertyCardProps {
    property?: Property;
    onPropertyDelete?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onPropertyDelete }: PropertyCardProps) => {

    const { id, title, description, images, price } = property? property : {} as Property;
    const { getToken } = useAuth();
    const toast = useToast();

    const deleteProperty = async () => {

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const token = await getToken();
            if (!token) {
                throw new Error('No token found');
            }
            if (!apiUrl) {
                throw new Error('No API URL found');
            }
            const response = await fetch(`${apiUrl}/property/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            if (onPropertyDelete) {
                onPropertyDelete();
            }
            toast({
                title: 'Annonce supprimée.',
                description: "Votre annonce a bien été supprimée.",
                position: 'bottom-right',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
        catch (error) {
            toast({
                title: 'Oups.',
                description: "Il y a eu un problème.",
                position: 'bottom-right',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            throw error;
        }
    }

    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        borderRadius='lg'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={ images ? images[0].url : 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'}
          alt='Photo de la propriété'
        />

        <Stack width='100%'>
          <CardBody maxH='100px' overflow='hidden'>
            <Heading size='md'>{ title ? title : 'The perfect latte' }</Heading>

            <Text py='2'>
              { description ? description : 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.' }
            </Text>
          </CardBody>

          <CardFooter width='100%'>
            <HStack spacing='5' justify='flex-end' width='100%'>
                <Button onClick={id ? deleteProperty : undefined} variant='outline' colorScheme='red'>
                    Supprimer
                </Button>
                <Button variant='outline' colorScheme='black' isDisabled={true}>
                    Modifier
                </Button>
            </HStack>
          </CardFooter>
        </Stack>
      </Card>
    )
 };