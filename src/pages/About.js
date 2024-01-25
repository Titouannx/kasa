import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

function About() {
  return (
    <div className="wrapper">
      <Banner classBanner="aboutBanner"/>

      <Collapse titleCollapse="Fiabilité" txtCollapse="
      Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      "/>

      <Collapse titleCollapse="Respect" txtCollapse="
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
      "/>

      <Collapse titleCollapse="Service" txtCollapse="
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
      "/>

      <Collapse titleCollapse="Sécurité" txtCollapse="
      La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
      "/>
    </div>
  )
}

export default About;
