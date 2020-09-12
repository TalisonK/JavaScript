//required methods
    import React from 'react';

// Components
    import Toolbar from './Toolbar/Toolbar';
    import Questoes from './Questoes/Questoes';
    import Sidedrawer from './Toolbar/drawer/sidedrawer';



class Jogo extends React.Component{

    //constructor
        constructor(props){
            super(props);
            this.state = {
                abaLateral:false
            }
        }

    //Sidedrawn
        //open
        toggleDrawer = () => {
            this.setState((prevState) => {
                return {abaLateral: !prevState.abaLateral}
            })
        }
        //close
            backdrawerclick = () => {
                this.setState({
                    abaLateral:false,
                })
            }
    
    //render method
        render(){
            return(
                <div className="App">
                    <Toolbar toggleDrawer={() => {this.toggleDrawer()}}/>
                    <Sidedrawer up={this.state.abaLateral}click={() => {this.backdrawerclick()}}/>
                    <Questoes/>
                </div>
            )
        }
}

export default Jogo;