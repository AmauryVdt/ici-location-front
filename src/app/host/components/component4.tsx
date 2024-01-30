import React from 'react';
import { Text } from '@chakra-ui/react';

const Component4: React.FC = () => {

  return (
    <Text>
      Faire un recapitulatif de l'annonce.
      Utiliser la page de présentation d'annonce mais ajouter un paramètre pour afficher les données de l'annonce.
      Le paramatre sera un objet de type Property || Undefined.
      Si c'est Undefined, on utiliser les infos de l'API sinon on utilise les infos de l'objet.
    </Text>
  );
};

export default Component4;
