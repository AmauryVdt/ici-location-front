import React from 'react';
import { Text } from '@chakra-ui/react';

const Component4: React.FC = () => {

  return (
    <Text>
      Faire un recapitulatif de l&lsquo;annonce.
      Utiliser la page de présentation d&lsquo;annonce mais ajouter un paramètre pour afficher les données de l&lsquo;annonce.
      Le paramatre sera un objet de type Property || Undefined.
      Si c&lsquo;est Undefined, on utiliser les infos de l&lsquo;API sinon on utilise les infos de l&lsquo;objet.
    </Text>
  );
};

export default Component4;
