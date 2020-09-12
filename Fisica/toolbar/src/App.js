// Required Modules
    import React, {Component} from 'react';
    import axios from 'axios'

//required components

    import Login from './components/login/main';
    import Jogo from './components/Jogo/main';

class App extends Component{

        
    //Constructor
    constructor(props){
        super(props);
        this.state = {
            isloged:false,
            grupo:"",
            nivel:""
        }
    }

    //login
        //state changer
            toggleloginstate = () => {
                this.setState((prevState) => {
                    return {isloged: !prevState.isloged}
                })
            }


    // render method for App Component
    render() {
        if(!this.state.isloged){
            return(
                <div className="App">
                    <Login loginstate={() => {this.toggleloginstate()}}/>
                </div>
            ) 
        }
        else{
            return (
                <Jogo/>
            )
        }
    }
}

export default App;