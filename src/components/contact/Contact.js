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
      <h1>General Questions</h1>
      <p>
        Not ready to schedule a request, but still have questions?
        No problem. Please fill out the form below with any questions you have. 
        We promise, we'll get back to you ASAP.
      </p>
      <button className="ui button black contact-btn" onClick={() => setRequest(true)}>Show Form</button>
      {request ? <Consultation /> : null}  
    </div>
    <div>
      <h1>General Request</h1>
      <p>
        Not ready just yet, but still have questions? Don't sweat it. Fill out all of the relevant information below. 
        and we will get back to you ASAP. We promise.
      </p>
      <button className="ui button black contact-btn" onClick={() => setGeneral(true)}>Show Form</button>
      { general ? <General /> : null} 
    </div>
      
    </div>
  </div>
  );
}

export default Contact;