import React, { Component } from 'react';


//Stateless Functional Component
const NavBar = ({totalCounter}) => {
    console.log('NarBar - Render')
    
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar <span
                        className="badge badge-pill badge-secondary"
                    >
                        {totalCounter}
                    </span></a>
            </div>
        </nav>
    )
}

/* class NavBar extends Component {

    render() {
        return (
            
        );
    }
} */

export default NavBar;