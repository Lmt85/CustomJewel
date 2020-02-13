import React from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';
function Nav() {

    const navStyle = {
        color: 'white'
    }
    return (
    <nav>
        <h3>La Esmeralda</h3>
        <ul className="nav-links">
            <NavLink style={navStyle} to='/' exact activeStyle={{color:'black'}}>
            <li>1. Diseño</li>
            </NavLink>
            <NavLink style={navStyle} to='/color' exact activeStyle={{color:'black'}}>
            <li>2. Color</li>
            </NavLink>
            <NavLink style={navStyle} to='/detail' exact activeStyle={{color:'black'}}>
            <li>3. Detalle</li>
            </NavLink>   
        </ul>
    </nav>
    );
}

export default Nav;
