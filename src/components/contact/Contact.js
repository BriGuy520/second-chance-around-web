import React from 'react';
import Consultation from './Consultation';
import General from './General';

const Contact = () => {
  return (
    <div className="content">
      <h1>Contact Us</h1>
      <div>
        <Consultation />
        <General />
      </div>
    </div>
  );
}

export default Contact;