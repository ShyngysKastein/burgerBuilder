import React from "react";
import './Logo.css';
import { Link } from "react-router-dom";
import burgerLogo from '../../assets/images/burger_logo.png';

const Logo = () => (
        <Link className="Logo" to='/'>
        <img src={burgerLogo} alt='burger logo'/>
        </Link>
)

export default Logo;