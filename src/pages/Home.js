import React from 'react';
import Banner from '../components/Banner';
import LogementCard from '../components/LogementCard';
import logementsData from '../data/logements.json';
import '../styles/LogementList.css';
import '../styles/Footer.css';

function Home() {
  return (
    <div>
        <Banner txtBanner="Chez vous, partout et ailleurs" classBanner="homeBanner"/>

        <div className="logement-list">
            {logementsData.map((logement) => (
            <LogementCard key={logement.id} logement={logement} />
            ))}
        </div>
    </div>
  )
}

export default Home;