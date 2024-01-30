import React, { useState, useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  SimpleGrid,
  Image,
  Box,
  Text,
  VStack,
  Center,
  Spacer,
  ButtonGroup,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { Property } from '@/app/host/page';

interface FileUploadModalProps {
  setData: React.Dispatch<React.SetStateAction<Property>>;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({ setData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)//.slice(0, 5);
      setFiles(fileArray);
      // TODO: Implement the file upload logic here
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
    // Optionally, you can also remove the file preview or any associated data here
  };

  const openFileSelector = () => {
    inputRef.current?.click();
  };

  const validate = () => {
    setData(prevState => ({
      ...prevState,
      propertyPicture: {
        ...prevState.propertyPicture,
        photos: files,
      }
    }));
    onClose();
  }

  return (
    <>
      <Button onClick={onOpen}>Ajouter des photos (max 5)</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajoutez des photos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Center
                p={10}
                border="2px dashed"
                borderColor="gray.300"
                w="full"
                borderRadius="md"
              >
                <Box textAlign="center">
                  <AiOutlineCloudUpload size="24px" />
                  <Text>Glissez-déposez un fichier</Text>
                  <Text fontSize="sm" color="gray.500">
                    ou recherchez des photos
                  </Text>
                  <Button mt={2} variant="outline" onClick={openFileSelector}>
                    Parcourir
                  </Button>
                  <Input
                    type="file"
                    multiple
                    onChange={handleFilesChange}
                    ref={inputRef}
                    hidden
                  />
                </Box>
              </Center>

              <SimpleGrid columns={2} spacing={4}>
                {files.map((file, index) => (
                  <Box key={index} position="relative" boxShadow="md" borderRadius="md">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`image-${index}`}
                      borderRadius="md"
                      boxSize="150px"
                      objectFit="cover"
                    />
                    <Box
                      position="absolute"
                      top="1"
                      right="1"
                      cursor="pointer"
                      onClick={() => handleRemoveFile(index)}
                    >
                      <CloseIcon w={3} h={3} />
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup colorScheme="black" size="sm" w="full">
              <Button variant="outline" onClick={onClose}>
                Annuler
              </Button>
              <Spacer />
              <Button onClick={validate}>Valider</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FileUploadModal;
