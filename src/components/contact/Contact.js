import React, { useState } from 'react';
import Consultation from './Consultation';
import General from './General';

function Contact(){

  const [request, setRequest] = useState(false);
  const [general, setGeneral] = useState(false);
  

 const handleClick = () => {
    setGeneral(true);
  }

  return (
    <div className="content">
      <div className="contact-cover">
        <h2>Contact Us</h2>
      </div>
      <div>
        <div className="contact-section">
          <h1>Consultation Request</h1>
          <p>
            Not ready to schedule a request, but still have questions?
            No problem. Please fill out the form below with any questions you have. 
            We promise, we'll get back to you ASAP.
          </p> 
          {request ? <Consultation  consultForm={request} /> : <button id="form" className="ui button black contact-btn" onClick={() => setRequest(true)}>Show Form</button>}  
        </div>
        <div className="contact-section">
          <h1>General Questions</h1>
          <p>
            Not ready just yet, but still have questions? Don't sweat it. Fill out all of the relevant information below. 
            and we will get back to you ASAP. We promise.
          </p>
          { general ? <General questionForm={general} /> : <button id="form2" className="ui button black contact-btn" onClick={handleClick}>Show Form</button>} 
        </div>
      </div>
    </div>
  );
}

export default Contact;