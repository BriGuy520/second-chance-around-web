import React from 'react';

const General = () => {

  return (
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
        <button className="ui button red">Cancel</button>
      </form>
    </div>
  )
}

export default General;