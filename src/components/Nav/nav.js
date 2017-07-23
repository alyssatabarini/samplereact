import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './nav.css';

class ElaNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(context);
    }

    navSelected = (eventKey) => {
        
        switch (eventKey) {
            case 1: 
                this.props.history.push("/home");
            case 2: 
                this.props.history.push("/sources");
            case 3: 
                this.props.history.push("/obligations");
            default:
                break;
        }
    }
    /*
    Possible refactor: Create an object with the text for the link, mapping to the value 
    of the to="", then loop over and render link components 
    [
        {
            Home: '/home'
        },
        {
            ...etc
        }
    ]
    */
    render() {
        return (
         
            <Navbar> 
                <Nav className="nav">
                    <NavLink to='/home' className="link" activeClassName="link-active"> Home </NavLink> 
                    <NavLink to='/sources' className="link" activeClassName="link-active"> Sources </NavLink> 
                    <NavLink to='/obligations' className="link" activeClassName="link-active"> Obligations </NavLink> 
                </Nav> 
            </Navbar>
       
        )
    }
}

export default ElaNav; 