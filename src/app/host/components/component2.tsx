import { Container, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
// import Dropzone from '@/components/dropzone';
import FileUploadModal from '@/components/fileUploadModal';
import PictureBox from '@/components/pictureBox';
import { Property, PropertyPicture } from '../page';

interface PictureProps {
  data: PropertyPicture;
  setData: React.Dispatch<React.SetStateAction<Property>>;
}

// TODO: vérifier la taille des images, faire en sorte de toujours avoir 5 carrés.

const Component2: React.FC<PictureProps> = ({ data, setData }) => {

  // const photos = data.photos.slice(0,5);
  const extendedPhotos = data.photos.slice(); 
  while (extendedPhotos.length < 5) {
    extendedPhotos.push(undefined as unknown as File);
  }

  return (
    <VStack spacing='30px'>
      <FileUploadModal setData={ setData } />
      <Container maxW='full' flex='1'>
        <SimpleGrid spacing={10} minChildWidth='150px'>

          <PictureBox file={undefined} />

          {extendedPhotos.map((photo, index) => (
            <PictureBox key={index} index={index} file={photo || undefined} />
          ))}
          
        </SimpleGrid>
      </Container>
    </VStack>
  );
};

export default Component2;
