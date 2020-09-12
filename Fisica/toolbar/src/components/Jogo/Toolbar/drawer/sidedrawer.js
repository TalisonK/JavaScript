import React from 'react';
import Fundo from '../../Fundofosco/fundo';

import './sidedrawer.css';

const sideDrawer = props => {
    console.log(props.up)
    if(props.up){
        return (
            <div>
                <Fundo click={() => {props.click()}}/>
                <nav className="side-drawer">
                    <ul>
                        <li><a href="/">Placar</a></li>
                        <li><a href="/">Sair</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
    else{
        return(<div></div>)
    }
}

export default sideDrawer;