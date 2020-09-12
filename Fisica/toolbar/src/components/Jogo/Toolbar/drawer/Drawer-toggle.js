import React from 'react';

import "./Drawer.css"

const drawerButton = props => (
    <button className="toolbar__toggle-button" onClick={() => {props.toggleDrawer()}}>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line"/>
    </button>
)

export default drawerButton;