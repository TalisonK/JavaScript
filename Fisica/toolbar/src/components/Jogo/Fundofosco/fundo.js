import React from 'react';

import "./fundo.css";

const fundo = props => (
    <div className="fundoFosco" onClick={() => {props.click()}}></div>
); 

export default fundo;