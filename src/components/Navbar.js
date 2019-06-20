import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

class Navbar extends Component {

    constructor(props){
        super(props);

        this.state = { showMenu: false, width: 0, height: 0 };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount(){
        this.updateWindowDimensions();
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions(){
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    showMenu(event){
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(){
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    renderNavigation(){
        if(window.innerWidth < 800) {
            return (
                <div className="the-nav">
                    <header>
                        <div className="nav-header">
                            <Link to="/"><h1>SECOND CHANCE AROUND</h1></Link>
                            <i onClick={this.showMenu} className="bars icon"></i>
                        </div>
                        { this.state.showMenu ? (
                            <nav>
                                <Link to='/services'><li key={1}>SERVICES</li></Link>
                                <Link to='/about'><li key={2}>ABOUT US</li></Link>
                                <Link to='/contact'><li key={3}>CONTACT</li></Link>
                            </nav>
                            ) : (
                                null
                            )
                        }      
                    </header>
                </div>
            );
        } else {
            return (
                <React.Fragment>
                    <Menu />
                </React.Fragment>     
            );
        }
    }

    render(){
        return (
            <div>
               {this.renderNavigation()}
            </div>
        )
    }
}

export default Navbar;