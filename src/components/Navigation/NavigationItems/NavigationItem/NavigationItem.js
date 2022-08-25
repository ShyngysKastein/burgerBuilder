import React from "react";
import { NavLink } from "react-router-dom";
import './NavigationItem.css';

const NavigationItem = ({to,end,children}) => (
    <li className="NavigationItem">
        <NavLink to={to} end={end}>{children}</NavLink>
    </li>
)

export default NavigationItem;