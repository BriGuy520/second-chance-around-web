import React, { useState } from 'react';

const General = ({questionForm, formValues}) => {

  const [cancelGeneral, setGeneral] = useState(questionForm);

  console.log(formValues);


  return (
    <div>
    {cancelGeneral ?
    <div className="general-request close content">
      <form className="fadein">
        <p>
          Name*<br/><input type="text" name="firstname" /><input type="text" name="lastname" /><br/>
          Email*<br/><input type="text" name="email" />
        </p>
        <p>
          Subject*<br/><input type="text" name="subject" />
        </p>
        <p>Message*<br/>
          <textarea name="details" rows="10" cols="75"></textarea>
        </p>
        <button className="ui button primary" type="submit">Submit</button>
        <button onClick={() => setGeneral(false)} className="ui button red">Cancel</button>
      </form>
    </div>
    : <button className="ui button black contact-btn" onClick={() => setGeneral(true)}>Show Form</button>}
  </div>
  )
}

export default General;