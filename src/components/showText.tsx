'use client'
import { Collapse, Button } from '@chakra-ui/react'
import React from 'react'

type ShowTextProps = {
    text: string;
  };

export default function ShowText( { text }: ShowTextProps ) {
    const [show, setShow] = React.useState(false)
  
    const handleToggle = () => {setShow(!show); console.log(show)}
  
    return (
      <>
        <Collapse startingHeight={20} in={show} >
          {/* {text} */}
          "Appartement Lumineux et Moderne de 2 Chambres en Centre-Ville"

+ "Localisation : Situé au cœur de la ville, à quelques pas des commerces, restaurants, et transports en commun."
+ "Taille : 75 m²."
+ "Chambres : 2 chambres spacieuses, chacune avec un grand lit double, des armoires encastrées, et de grandes fenêtres offrant une vue sur la ville."
+ "Salon : Un salon ouvert et lumineux avec un canapé confortable, une table basse, et une télévision à écran plat. Accès à un balcon avec vue urbaine."
+ "Cuisine : Cuisine moderne entièrement équipée avec réfrigérateur, four, micro-ondes, lave-vaisselle, et une variété d'ustensiles de cuisine."
+ "Salle de bain : Salle de bain contemporaine avec douche à l'italienne, WC, et lavabo. Carrelage moderne et luminaire élégant."
+ "Autres caractéristiques : Connexion Wi-Fi haut débit, système de chauffage central, double vitrage, et accès sécurisé à l'immeuble."
+ "Prix : 1 200 € par mois, charges non comprises."
+ "Conditions de location : Contrat de location d'un an minimum, dépôt de garantie de 2 mois de loyer, preuve de revenu requise."
+ "Cet appartement représente une opportunité exceptionnelle pour ceux qui cherchent un logement confortable et moderne au cœur de la ville. Parfait pour les professionnels ou les petites familles. Visites disponibles sur demande."
        </Collapse>
        <Button size='sm' onClick={() => { console.log('Bouton cliqué'); handleToggle(); }} mt='1rem'>
          Show {show ? 'Less' : 'More'}
        </Button>
      </>
    )
}