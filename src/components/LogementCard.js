import React from 'react';
import { Link } from 'react-router-dom';

function LogementCard({ logement }) {
  return (
    <div className="logement-card">
      <Link to={`/logement/${logement.id}`}>
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </Link>
    </div>
  );
}

export default LogementCard;