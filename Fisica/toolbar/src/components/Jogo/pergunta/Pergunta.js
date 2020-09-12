import React from 'react';

import "./Pergunta.css";


class Pergunta extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            status:false,
            questoes:[],
            grupo:"",
            nivel:"",
            respostas:[]
        }
    }

    render(){
        return(
            <div className="EspaçoDaQuestao">
                {/* {this.state.respostas.map((x) => {(x.substring(0,4) === "data:")})} */}
            </div>
        )
    }
}