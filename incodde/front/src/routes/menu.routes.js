//required Modules
import React, { useState, useEffect} from "react";
import { Switch,Route, Redirect } from "react-router-dom";

//Pages

import {Menu} from "../pages/Menu/mainmenu.pages"; 

// Authentication methods
import { isloged } from "../components/auth.components";

const PrivateRoute = ({ component: Component, ...rest})=> (
    <Route {...rest}
    render = { props => true? (
        <Component {...props}/>):
        <Redirect to={{ pathname:"/", state : {from: props.location}}}/>
        }/>
)

export const Home = () =>{
    return (
        <PrivateRoute path="/home" component={Menu}/>
    )
}

