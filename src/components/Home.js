import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            testimonials: [{
                    customer: "Angela P.",
                    residence: "River Forest, IL",
                    testimony: "Ashley was a joy to work with. was very professional and a huge weight was lifted after we got through the process. She helped me decide what was truly meaningful and what I should finally part with.  We even put some things in a small storage space to revisit in a year.  I can't thank her enough.",
                    background: "#ffff80"
                },
                {
                    customer: "Jackie C.",
                    residence: "Chicago, IL",
                    testimony: "Ashley was a joy to work with. was very professional and a huge weight was lifted after we got through the process. She helped me decide what was truly meaningful and what I should finally part with.  We even put some things in a small storage space to revisit in a year.  I can't thank her enough.",
                    background: "#80ffe5"
                },
                {
                    customer: "Brian F.",
                    residence: "Austin, TX",
                    testimony: "Ashley was a joy to work with. was very professional and a huge weight was lifted after we got through the process. She helped me decide what was truly meaningful and what I should finally part with.  We even put some things in a small storage space to revisit in a year.  I can't thank her enough.",
                    background: "#ff99ff"
                }]
        }
    }

    renderTestimonials(){
        return this.state.testimonials.map(testimonial => {
            return (
                <div className="testimonial" style={{background: testimonial.background}}>
                    <p>
                        {testimonial.testimony}
                    </p>
                    <p>- {testimonial.customer}</p>
                    <p><i>{testimonial.residence}</i></p>
            </div>
            );
        })
    }

    render(){
        return (
            <div className="content">
                <div className="home-cover">
                    <h2>BE BRAVE AND LET IT GO!</h2>
                </div>
                <div className="second-section section">
                    <h1>Let's Take This One Step at a Time.</h1>
                    <p>
                    The most effective method of any organizing project begins with discarding… let one of our Simplifying Specialist guide you through the difficult process of deciding what should stay and what should go. 
                    </p>
                    <Link to="/contact">
                        <button className="ui button black">
                            Make Appointment
                        </button>
                    </Link>
                </div>
                <div className="third-section section">
                    <h1>Don't Take Our Word For It. Read What Our Customers Have to Say...</h1>
                    <div className="testimonials">
                        {this.renderTestimonials()}
                    </div> 
                </div>
            </div>
            
        );
    };
};

export default Home;