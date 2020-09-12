//required modules
    import React from 'react';
    import axios from 'axios';


// Compoments
    import Login from './Login/Login';


class Dados extends React.Component{

    //constructor
        constructor(props){
            super(props);
            this.state ={
                nome:"",
                nivel:""
            }
        }

    //Post Server acess function
        async submit(url){
            const nome = document.getElementById("nome").value;
            const senha = document.getElementById("senha").value;
            const ano = document.getElementById("ano").innerText;
            const erro = document.getElementById("erro");
            const grupo = {
                nome:nome,
                senha:senha,
                nivel:ano
            }

            const response = await axios.post(url, grupo, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }) 
            erro.innerHTML = `${response.data.status}`;
            if (response.status !== 202){
                erro.className = "login__mensagem__erro";
            }else{
                erro.className = "login__mensagem__suss";
                if(url.substring(27,31)=== "login") return true;
            }
            setTimeout(() => {erro.className = "login__mensagem"; erro.innerHTML = ""}, 2500)
        }

    //login Authentication function
        login(){
            if(this.submit('http://localhost:3030/auth/login')) this.props.loginstate();
        }
    //registration function
        
        async cadastro(){
            this.submit('http://localhost:3030/auth/cadastro');
        }

    
    //render method
        render(){
            return(
                <Login cadastro={() => {this.cadastro()}} login={() => {this.login()}}/>
                )
            
        }
}

export default Dados;