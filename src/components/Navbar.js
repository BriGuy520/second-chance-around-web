import React, { Component } from 'react';
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
                            <h2>SECOND CHANCE AROUND</h2>
                            <i onClick={this.showMenu} className="bars icon"></i>
                        </div>
                        { this.state.showMenu ? (
                            <nav>
                                <li key={service}>SERVICES</li>
                                <li key={about}>ABOUT US</li>
                                <li key={contact}>CONTACT</li>
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