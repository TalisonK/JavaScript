//required Modules
    import React from 'react';
    import axios from 'axios';

//css import
    import './Login.css';





// Login interface Component
    class Login extends React.Component{

        //Class constructor
            constructor(props){
                super(props);
                this.state ={
                    statusTurma:false,
                    grupo:"",
                    senha:"",
                    ano:"Turma"
                }
            }

            cadastro(){
                this.props.cadastro();
            }

        
            


        
        // change status Turma to his opposite
            turmatoggle(){

                this.setState((prevState) =>{
                    return {statusTurma:!prevState.statusTurma}
                })
            }

        // Updates selected degree on this.state.ano
            changeTurmaText(x){
                this.setState({ano:x});
                this.turmatoggle()
            }
        
        //Create Turma Form based on this.state.statusTurma
            turmaForm(){
                let anos = []
                for(let i = 1; i < 4; i++){
                    anos.push(`${i} ano`)
                }
                if(this.state.statusTurma){
                    return(
                        <form className="login__turma__form">
                            {anos.map((x) => {return(<p className="Turmas" 
                            onClick={() =>{this.changeTurmaText(x)}}>{x}</p>)})}
                        </form>
                    )
                }else{
                    return <label id="ano" className="login__turma__input" onClick={() =>{this.turmatoggle()}}>{this.state.ano}</label>
                }   
            }

        //Render method
            render(){
                return(
                <div className="login__body">
                    <section className="login__section">
                        <h1 className="login__titulo">Jogo pedagógico</h1>
                        <form className="login__form">
                            <p2 id="erro" className="login__mensagem"></p2>
                            <label htmlFor="login__input__nome">Grupo</label>
                            <input id="nome" type="text" className="login__input__nome"/>

                            <label htmlFor="login__input__password">Senha</label>
                            <input id="senha" type="password" className="login__input__password"/>
                            {this.turmaForm()}
                            <ul className="login__botoes">
                                <li className="login__button__Login"><div onClick={() => {this.props.login()}}>Login</div></li>                
                                <li className="login__button__Cadastrar"><div onClick={() => {this.props.cadastro()}}>Cadastrar</div></li>                
                                <li className="login__button__Placar"><div>Placar</div></li>                
                            </ul>
                        </form>
                    </section>
                    
                </div>
                )
            }
    }


//component exportation
    export default Login;