import React, { Component } from 'react'
import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
import { render } from '@testing-library/react';
class NavBar extends Component{
  render() {
    return (
        <div>
          <ul className = {s.nav}>
            <li><NavLink to ="/home">Home</NavLink></li>
            <li><NavLink to ="/main">Main Cakes</NavLink></li>
            <li><NavLink to ="/icecream">Ice Cream</NavLink></li>
            <li><NavLink to ="/milkshake">Milkshakes</NavLink></li>
          </ul>

        </div>


    );
  }
}
export default NavBar

