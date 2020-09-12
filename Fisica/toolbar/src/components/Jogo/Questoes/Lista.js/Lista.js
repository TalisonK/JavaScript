import React from 'react';

import "./Lista.css";

let aux = [1,2,3,4,5,6,7,8,9]

const lista = props =>(
    <div className="lista">
        <h1 className="texto__questoes">Questões</h1>
        <div>
            {aux.map((x) => <div className="texto__numeroQ">{`Questão ${x}`}</div>)}
        </div>
        
    </div>
    
)

export default lista;