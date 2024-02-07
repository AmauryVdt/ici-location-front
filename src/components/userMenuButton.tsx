import React from 'react';
import { UserProfile, useClerk } from '@clerk/nextjs';
import { Button, ButtonGroup, Link, Menu, Modal, useDisclosure, MenuButton, IconButton, MenuList, MenuItem, ModalOverlay, ModalContent } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation'

export const UserMenuButton: React.FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { signOut } = useClerk();
    const router = useRouter()

    return (
        <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem onClick={onOpen}>Gérer son compte</MenuItem>
                    <MenuItem onClick={() => signOut()}>Se déconnecter</MenuItem>
                    <MenuItem onClick={() => router.push('/host/my-properties')} >Mes annonces</MenuItem>
                </MenuList>
            </Menu>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <UserProfile />
                </ModalContent>
            </Modal>
        </>
    )
}