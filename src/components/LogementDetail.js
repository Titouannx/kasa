import React from 'react';
import Carousel from './Carousel';
import Collapse from './Collapse';
import { useParams } from 'react-router-dom';
import logementsData from '../data/logements.json';
import '../styles/LogementDetail.css';
import Error from './Error';

function LogementDetail() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="listing-details">
      <Carousel images={logement.pictures} />
      <h1>{logement.title}</h1>
      <h4>{logement.location}</h4>
      <div className="tags">
        {logement.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <div className='multi-collapse-container'>
        <div className="collapse-wrapper">
          <Collapse className="collapseLogement" titleCollapse="Description" txtCollapse={logement.description}></Collapse>
        </div>
        <div className="collapse-wrapper">
          <Collapse className="collapseLogement" titleCollapse="Équipements" txtCollapse={logement.equipments.map(equipment => <li key={equipment}>{equipment}</li>)}></Collapse>
        </div>
      </div>
    </div>
  );
}

export default LogementDetail;