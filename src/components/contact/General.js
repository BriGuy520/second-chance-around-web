import React, { useState } from 'react';

const General = (props) => {

  const [cancelGeneral, setGeneral] = useState(props.questionForm);

  return (
    <div>
    {cancelGeneral ?
    <div className="general-request content">
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
        <button onClick={() => setGeneral(false)} className="ui button red">Cancel</button>
      </form>
    </div>
    : <button className="ui button black contact-btn" onClick={() => setGeneral(true)}>Show Form</button>}
  </div>
  )
}

export default General;