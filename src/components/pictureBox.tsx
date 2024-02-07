import { Box, Center, Img, Image, Text } from '@chakra-ui/react';

interface PictureBoxProps {
  index?: number;
  file?: File;
}

const PictureBox: React.FC<PictureBoxProps> = ({ index, file }) => {
  
  const placeholder = (
          <Box 
          textAlign="center" 
          maxWidth={150}
          maxHeight={150}
          p='3'
          border="2px dashed gray"
          borderRadius="lg"
          _hover={{ bg: 'gray.100', cursor: 'pointer' }}
          >
          <Center>
              <Img
              src="/png-clipart-graphy-camera-logo-camera-text-photography-removebg-preview.png" // Remplace cela par le chemin de ton image de placeholder
              alt="placeholder"
              mb={4}
              boxSize={65}
              objectFit='contain'
              />
          </Center>
          <Text fontSize="lg" fontWeight="bold">
            { index && `Photo n°${index+1}` }
            { !index && 'Ajouter' }
          </Text>
        </Box>
  )

  const pictureStuff = file ? (
    <Box
    maxWidth={150}
    maxHeight={150}
    >
      <Center>
        <Image
              src={ URL.createObjectURL(file as File) }
              alt="photos"
              boxSize='150'
              borderRadius='lg'
              //boxSize={65}
              objectFit='cover'
              />
      </Center>
    </Box>
  ) : null;

  return (
      <>
        { file ? pictureStuff : placeholder}
      </>
  );
};

export default PictureBox;
