import React, { Component } from 'react';

class Consultation extends Component {

  handleSubmit(e){
    e.preventDefault();
    alert('Submitted');
  }

  render(){
    return (
      <div className="general-request content">
        <h1>General Request</h1>
        <p>
          Not ready just yet, but still have questions? Don't sweat it. Fill out all of the relevant information below. 
          and we will get back to you ASAP. We promise.
        </p>
        <form onSubmit={this.handleSubmit} action="../../server/contact.php" method="post">
        <p>
          Name*<br/><input type="text" name="firstname" /><input type="text" name="lastname" /><br/>
          Email*<br/><input type="text" name="email" />
        </p>
        <p>Project Type</p>
        <select>
          <option value="Entire Home">Entire Home</option>
          <option value="3/4 Rooms">3/4 Rooms/Spaces</option>
          <option value="1/2 Rooms">1/2 Rooms/Spaces</option>
        </select>
        <p>
          Project Start Date*<br/><input type="date" name="startdate" />
        </p>
        <p>
          Project End Date*<br/><input type="date" name="enddate" />
        </p>
        <p>More Details<br/>
          <textarea name="details" rows="10" cols="100"></textarea>
        </p>
        <button className="ui button primary" type="submit">Submit</button>
    </form>

    </div>
    );
  }
}

export default Consultation;