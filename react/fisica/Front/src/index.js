import React from 'react';
import ReactDOM from 'react-dom';
import {TelaLogin} from './TelaLogin';
import {Tela} from './quiz';


export function cordefundo(cor){
    document.getElementById("corpo").style.backgroundColor = cor;
}

cordefundo("#57fad9");



class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loged: false,
        }
    }

    loginInf(){
        console.log("Oi")
        this.setState({
            loged: !this.state.loged,
        })
    }

    render(){
        return this.state.loged?(<Tela/>): (<TelaLogin login={() => {this.loginInf()}}/>);
    }      
}

ReactDOM.render(<App/>, document.getElementById("App"));

/*
import React from 'react';
import ReactDOM from 'react-dom';
import {Perg, Alternativas, AlternativaS, Login, TextoLogin, Logininput, Logiin} from './styles'
import axios from 'axios'

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
                <input type="radio" name="alternativa" id={props.alt}  className="inputs"></input>
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
const notloaded = true;
class Tela extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            grupo: "fudidos",
            id: null,
            pText: null,
            pIMG: null,
            alts: [],
        };
        console.log("oi")
    }

    async load(){
        let data ={
            tipo: "load",
            grupo: "fudidos",
        }

        const response = await axios.post('http://localhost:3030/api', data, {
        headers: {
            'Content-Type': 'application/json'
        }
        })
        const json = await response.data;

        this.setState({
            leaded: false,
            id: json.id,
            ptext:json.pText,
            pIMG: json.pIMG,
            alts: json.alternativas,
        })
    }


    async submit(){
        let data = {
            tipo: "resposta",
            id: this.state.id,
            grupo: this.state.grupo,
        };
        [...document.querySelectorAll(".inputs")].map((x) => {if(x.checked){data.resposta = x.id;}});

        const response = await axios.post('http://localhost:3030/api', data, {
        headers: {
            'Content-Type': 'application/json'
        }
        })
        const json = await response.data;
        
        this.setState({
            id: json.id,
            pText: json.pText,
            pIMG: json.pIMG,
            alts: json.alternativas,
        })
    }
    render() {
        if(this.state.loaded === null){this.load()}
        return ( 
            <div>
                <Pergunta pText = { this.state.pText } pIMG = { this.state.pIMG }/>
                <Resposta alts = {this.state.alts} submit = {() => this.submit()}/>                
            </div>
        );
    }
}






function cordefundo(cor){
    document.getElementById("corpo").style.backgroundColor = cor;
}

async zzzzzfunction login(){
    const grupo = document.getElementById("nomeGrupo").value;
    const senha = document.getElementById("senhaGrupo").value;
    const data = {
        tipo: "login",
        grupo: grupo,
        senha: senha,
    }
    const response = await axios.post('http://localhost:3030/api', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resposta = await response.data;
}

class TelaLogin extends React.Component{

    
    render(){
        cordefundo("#836ee6");
        return(
        <section>
            <Logiin>
                Login
            </Logiin>
            <Login>
                <Logininput>
                    <TextoLogin>Grupo: </TextoLogin><br/>
                    <input type="text" id="nomeGrupo"></input>
                </Logininput>
                <Logininput>
                    <TextoLogin>Senha: </TextoLogin><br/>
                    <input type="password" id="senhaGrupo"></input>
                </Logininput>
                <Logininput>
                    <TextoLogin>Turma: </TextoLogin><br/>
                    
                </Logininput>
                <button onClick={()=> login()}>Entrar</button>
                <button>Cadastrar</button>
            </Login>
        </section>
        
    )}
}

ReactDOM.render(<Tela/> ,document.getElementById('App'))
//ReactDOM.render(<TelaLogin/> ,document.getElementById('App'))

*/