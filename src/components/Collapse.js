import React, { useState } from 'react';
import '../styles/Collapse.css'; 
import arrow from '../assets/arrow.png';

function Collapse({titleCollapse, txtCollapse}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="header" onClick={toggleCollapse}>
        <h3>{titleCollapse}</h3>
        <img src={arrow} alt="icone de flèche du collapse" className={`arrow ${isCollapsed ? 'down' : 'up'}`} />
      </div>
      
      <div className="content-wrapper">
      {!isCollapsed && (
        <div className="content">
          <p>{txtCollapse}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Collapse;
