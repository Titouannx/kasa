import React from 'react';
import Carousel from './Carousel';
import Collapse from './Collapse';
import { useParams } from 'react-router-dom';
import logementsData from '../data/logements.json';
import '../styles/LogementDetail.css';
import Error from './Error';
import Rating from './Rating';

function LogementDetail() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }

  const [firstName, lastName] = logement.host.name.split(' ');

  return (
    <div className="listing-details">
      <Carousel images={logement.pictures} />
      <div className='infos-and-host'>
        <div className="left-column">
          <h1>{logement.title}</h1>
          <h4>{logement.location}</h4>
          <div className="tags">
            {logement.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </div>
        
        <div className="right-column">
          <div className="host-info">
            <div className='host-name'>
              <h5 className="host-first-name">{firstName}</h5>
              <h5 className="host-last-name">{lastName}</h5>
            </div>
            <img src={logement.host.picture} alt="Photo de profil de l'hôte" className="host-picture" />
          </div>
          <Rating rating={logement.rating} />
        </div>
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