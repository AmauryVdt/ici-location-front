import { Button, ButtonProps, useToast } from '@chakra-ui/react'
import React from 'react'

interface PromiseBasedToastProps {
    functionToaster: () => Promise<unknown>;
    children?: React.ReactNode;
    buttonProps?: ButtonProps;
  }
  
export const PromiseBasedToast: React.FC<PromiseBasedToastProps> = ({ functionToaster, children, buttonProps }) => {
    const toast = useToast()
    return (
      <Button
      {...buttonProps}
        onClick={async () => {

          const promiseToast = functionToaster();

          toast.promise(promiseToast, {
            success: { title: 'Votre annonce a bien a été créé', description: 'Youhou 🎉', position: 'bottom-right', duration: null, isClosable: true },
            error: { title: 'Oups', description: 'Désolé, on a rencontré un problème lors de la création de votre annonce', position: 'bottom-right', duration: null, isClosable: true },
            loading: { title: 'Création de votre annonce', description: 'Patientez, c\'est bientôt prêt!', position: 'bottom-right' },
          })
        }}
      >
        {children || 'Valider'}
      </Button>
    )
  }