import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import './Toolbar.css';

const Toolbar = () => (
    <header className="Toolbar">
        <div className="Toolbar-Logo">
            <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar;