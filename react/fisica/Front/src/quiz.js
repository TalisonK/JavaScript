import React from 'react';
import axios from 'axios';
import {Perg, Alternativas, AlternativaS} from './styles'
import {cordefundo} from './index';



function Pergunta(props){

    let img = <div/>;
    let text = <div/>;

    if(props.pIMG){
       img = <img id="imagem" src={props.pIMG} alt="Imagen opcional"></img>;
    }
    if(props.pText){
        text = <p>{props.pText}</p>;
    }
    return (
        <Perg>
            {text}
            {img}
       </Perg>
    )
}

function Alternativa(props){
    if(props.alt.length >= 5 && props.alt.substring(0,4) === "http"){
        return(
            <AlternativaS>
                <input type="radio" name="alternativa" id={props.alt} className="inputs"></input>
                <img src={props.alt} alt="alternativa"></img>
            </AlternativaS>
        )
    }else{return (
        <AlternativaS>
            <input type="radio" name="alternativa" id={props.alt} className="inputs"></input>
            <label for={props.alt}>{props.alt}</label>
        </AlternativaS>
    )}
}

function Resposta(props){
    return (
        <Alternativas>
            {props.alts.map(alt => <Alternativa alt={alt}/>)}
            <button onClick= {() => props.submit()}>Submit</button>
        </Alternativas>
    )
}

export class Tela extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id:null,
            pText: null,
            pIMG: null,
            alternativas: [],
        };
    }

    async submit(){
        let data = {
            tipo: "resposta",
            id: this.state.id,
            grupo: this.state.grupo,
            resposta: "",
        };

        [...document.querySelectorAll(".inputs")].map((x) => {if(x.checked){data.resposta = x.id;}});
 
        const response = await axios.post('http://localhost:3030/api', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.data;
        this.setState({
            id: json.body._id,
            grupo: "fudidos",
            pText: json.body.texto,
            pIMG: json.body.img,
            alternativas: json.body.alternativas,
        })
    }

    render() {
        cordefundo("#a67d1e");
        if(!(this.state.id)) this.submit();
        return (
            <div>
                <Pergunta pText = { this.state.pText } pIMG = { this.state.pIMG }/>
                <Resposta alts = {this.state.alternativas} submit = {() => this.submit()}/>                
            </div>
        );
    }
}