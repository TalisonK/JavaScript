//required Modules
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// block Routes
import { LoginRoute} from "./login.routes";
import { Home } from "./menu.routes";


export const Routes = () =>{
    return(
        <Switch>
            <LoginRoute/>
        </Switch>
    )
}