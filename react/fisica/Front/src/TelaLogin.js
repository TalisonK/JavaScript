import React from 'react';
import axios from 'axios';
import {cordefundo} from './index';
import {Logiin, Login, Logininput, TextoLogin} from './styles';


export class TelaLogin extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loginf: props.login,
        }
    }

    async submit(){
        let data = {
            tipo: "login",
            grupo: document.getElementById("nomeGrupo").value,
            senha: document.getElementById("senhaGrupo").value,
            turma: document.getElementById("turma").value,
        }
        const response = await axios.post('http://localhost:3030/login', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.data;
        if(json.status === "sucesso") this.state.loginf();
    }
    
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
                    <input type="text" id="turma"></input>
                    
                </Logininput>
                <button onClick={() => {this.submit()}}>Entrar</button>
                <button>Cadastrar</button>
            </Login>
        </section>
        
    )}
}