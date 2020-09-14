//required Modules
import React, { useState, useEffect} from "react";
import { Switch,Route, Redirect } from "react-router-dom";

//Pages

import { Login } from "../pages/login/login.pages";
import {Register} from "../pages/login/register.pages";
import {Forgot} from "../pages/login/forgot.pages";
import {Confirmation} from "../pages/login/validate.pages";
import {Menu} from "../pages/Menu/mainmenu.pages"; 

import { isloged } from "../components/auth.components";


//Logic manipulators
const logedis = isloged();

const PrivateRoute = ({ component: Component, ...rest})=> (
    <Route {...rest}
    render = { props => logedis? (
        <Component {...props}/>):
        <Redirect to={{ pathname:"/", state : {from: props.location}}}/>
        }/>
)

export const LoginRoute = () => {

    return(
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/forgot" component={Forgot}/>
            <Route path="/confirmation" component={Confirmation}/>
            <PrivateRoute path="/home" exact component={Menu}/>
        </Switch>
    )
}