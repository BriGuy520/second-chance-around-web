import React from 'react';
import Service from './Service';
import simplify from '../images/simplify.jpg';
import simplifyOrganize from '../images/simplify+organize.jpg';
import consign from '../images/consignment.jpg';

const Services = () => {

const service = [{
    type: "Simplify",
    description: 'A Simplifying Specialist will guide you though the process of how to decide what to keep and what to discard. This is the most basic level of services offered by Second Chance Around and only involves the “piling” and consulting portion of the tidying method. There is a 1-hour minimum for this service. Typically the basic, simplifying appointment last from 1 - 2 hours.',
    rate: 35,
    picture: simplify
  }, {
    type: "Simplify + Organize",
    description: 'In addition to all of the services offered in the basic simplifying appointment, a simplifying, organizing and discarding appointment includes your simplifying specialist returning or finding new homes for all the items you’ve decided have a specific purpose in your lifestyle as well as taking away items to be consigned or donated and any trash that accumulates. There is a 3-hour minimum for this service. Simplifying, organizing and discarding appointments vary in time based on project size.',
    rate: 50,
    picture: simplifyOrganize
  },{
    type: "Consign", 
    description: 'Following your appointment, consultation or inquiry Second Chance Around is willing to consign items the exceed $75 on the resale market. Please see our “Consignment” tab for additional information.',
    rate: "Any item worth over $75",
    picture: consign
  }]

  return (
    <div className="content">
      <Service offerings={service} />
    </div>
  )
};

export default Services;