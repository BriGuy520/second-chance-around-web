import React, { useState } from 'react';

const General = ({questionForm, values}) => {

  const [cancelGeneral, setGeneral] = useState(questionForm);
  const [formValues, setValues] = useState(values);

  console.log(formValues);

  return (
    <div>
    {cancelGeneral ?
    <div className="general-request close content">
      <form className="fadein">
        <p>
          Name*<br/><input type="text" name="fname" value={formValues.fname} onChange={e => setValues({ fname: e.target.value })} /><input type="text" name="lname" value={formValues.lname} onChange={e => setValues({ lname: e.target.value })} /><br/>
          Email*<br/><input type="text" name="email" value={formValues.email} onChange={e => setValues({ email: e.target.value })} />
        </p>
        <p>
          Subject*<br/><input type="text" name="subject" value={formValues.subject} onChange={e => setValues({ subject: e.target.value })} />
        </p>
        <p>Message*<br/>
          <textarea name="details" rows="10" cols="75" value={formValues.message} onChange={e => setValues({ message: e.target.value })}></textarea>
        </p>
        <button className="ui button primary" type="submit" value="Submit" onClick={e => setValues(e)}>Submit</button>
        <button onClick={() => setGeneral(false)} className="ui button red">Cancel</button>
      </form>
    </div>
    : <button className="ui button black contact-btn" onClick={() => setGeneral(true)}>Show Form</button>}
  </div>
  )
}

export default General;