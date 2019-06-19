import React from 'react';

const General = () => {

  return (
    <div className="general-request content">
      <h1>General Questions</h1>
      <p>
        Not ready to schedule a request, but still have questions?
        No problem. Please fill out the form below with any questions you have. 
        We promise, we'll get back to you ASAP.
      </p>
      <form>
        <p>
          Name*<br/><input type="text" name="firstname" /><input type="text" name="lastname" /><br/>
          Email*<br/><input type="text" name="email" />
        </p>
        <p>
          Subject*<br/><input type="text" name="subject" />
        </p>
        <p>Message*<br/>
          <textarea name="details" rows="10" cols="100"></textarea>
        </p>
        <button className="ui button primary" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default General;