import React from 'react';

const GeneralRequest = () => {
  return (
    <div className="general-request content">
      <h1>General Request</h1>
      <p>
        Not ready just yet, but still have questions? Don't sweat it. Fill out all of the relevant information below. 
        and we will get back to you ASAP. We promise.
      </p>
      <form action="contact.php" method="POST">
      <p>
        Name:<input type="text" name="firstname" /><input type="text" name="lastname" />
        Email:<input type="text" name="email" />
      </p>
      <p>Project Start Date:<input type="date" name="startdate" /></p>
      <p>Project End Date:<input type="date" name="enddate" /></p>
      <p>More Details:<br/>
        <textarea name="details" rows="10" cols="100"></textarea>
      </p>
  </form>

    </div>
  )
}

export default GeneralRequest;