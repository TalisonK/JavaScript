import React from 'react';

import './Toolbar.css';
import Drawer from "./drawer/Drawer-toggle"

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <Drawer toggleDrawer={() => {props.toggleDrawer()}}/>
        <div className="toolbar__logo">Jogo pedagógico</div>
        <div className="spacer" />
        <div className="time">00:00</div>
        <div className="spacer2" />
        <div className="toolbar_navigation-items">
            <ul>
                <li className="placar__button"><a href="/">Placar</a></li>
                <li><a href="/">Proxima</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;