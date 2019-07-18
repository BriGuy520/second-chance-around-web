import React, { useState } from 'react';

const General = ({questionForm, values}) => {

  const [cancelGeneral, setGeneral] = useState(questionForm);
  const [formValues, setValues] = useState(values);

  console.log(setValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setValues(formValues));
  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    console.log(formValues);
    console.log(value);
    console.log(name);

    console.log(setValues(values => ({...values, [name]: value})));
  }

  return (
    <div>
    {cancelGeneral ?
    <div className="general-request close content">
      <form onSubmit={handleSubmit} className="fadein">
        <p>
          Name*<br/><input type="text" name="fname" value={formValues.fname} onChange={handleChange} /><input type="text" name="lname" value={formValues.lname} onChange={handleChange} /><br/>
          Email*<br/><input type="text" name="email" value={formValues.email} onChange={handleChange} />
        </p>
        <p>
          Subject*<br/><input type="text" name="subject" value={formValues.subject} onChange={handleChange} />
        </p>
        <p>Message*<br/>
          <textarea name="message" rows="10" cols="75" value={formValues.message} onChange={handleChange}></textarea>
        </p>
        <button className="ui button primary" type="submit" value="Submit">Submit</button>
        <button onClick={() => setGeneral(false)} className="ui button red">Cancel</button>
      </form>
    </div>
    : <button className="ui button black contact-btn" onClick={() => setGeneral(true)}>Show Form</button>}
  </div>
  )
}

export default General;