import React, { useState } from 'react';
import Consultation from './Consultation';
import General from './General';

function Contact(){

  const [request, setRequest] = useState(false);
  const [general, setGeneral] = useState(false);

  return (
    <div className="content">
      <h1>Contact Us</h1>
      <div>
        <div>
          <button className="ui button black" onClick={() => setRequest(true)}>Show Form</button>
          {request ? <Consultation /> : null}
          
        </div>
        <div>
          <button className="ui button black" onClick={() => setGeneral(true)}>Show Form</button>
          { general ? <General /> : null} 
        </div>
        
      </div>
    </div>
  );
}

export default Contact;