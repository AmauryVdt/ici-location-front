import { Box, Center, Img, Image, Text } from '@chakra-ui/react';

interface PictureBoxProps {
  index: number;
  file?: File;
}

const PictureBox: React.FC<PictureBoxProps> = ({ index, file }) => {
  
  const placeholder = (
        <>
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
            Photo n°{index + 1}
          </Text>
        </>
  )

  const pictureStuff = file ? (
    <Center>
      <Image
            src={ URL.createObjectURL(file as File) }
            alt="photos"
            // mb={4}
            //boxSize={65}
            objectFit='contain'
            />
    </Center>
  ) : null;

  return (
      <Box 
        textAlign="center" 
        maxWidth={230}
        p='3'
        border="2px dashed gray"
        borderRadius="lg"
        //_hover={{ bg: 'gray.100', cursor: 'pointer' }}
        >
          { file ? pictureStuff : placeholder}
      </Box>
  );
};

export default PictureBox;
