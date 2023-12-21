import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
// import Dropzone from '@/components/dropzone';
import FileUploadModal from '@/components/fileUploadModal';

const Component2: React.FC = () => {
  return (
    <SimpleGrid minChildWidth='280px'>
      <FileUploadModal />
    </SimpleGrid>
  );
};

export default Component2;
