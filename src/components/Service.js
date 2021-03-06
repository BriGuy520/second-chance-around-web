import React from 'react';

const Service = ({ offerings }) => {
  
  const servicesOffered = offerings.map(offered => {
    return (
      <div className="service-provided">
        <div className="service-copy">
          <h1>{offered.type}</h1>
          <p>{offered.description}</p>
          { typeof offered.rate === "number" ? <span className="services-price"><h2>${offered.rate}</h2>/hour</span> : <span className="services-price">{offered.rate}</span> }
        </div>
        <div className="service-photo">
          <img src={offered.picture} alt="services" />
        </div>
      </div>
    )
  })

  return (
    <div>
      {servicesOffered}
    </div>
  );
}

export default Service;