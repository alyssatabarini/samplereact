import React from 'react';
import './header.css';

class Header extends React.Component {


    render() {
        return(
           <div className="topheader">
           <h1 className="title"> ELA 2.0 </h1>
           <div className="line1"/>  
           <h3 className="company"> JPMORGAN CHASEE </h3>
           <div className="line1"/>  
           <p className="user"> Tabarini, Alyssa </p> 
           <div className="line1"/>  
           </div> 
        )
    }
}

export default Header; 