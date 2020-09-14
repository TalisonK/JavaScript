import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Alert } from 'reactstrap';

import {login} from '../../components/login.components';

import "../../styles/login.styles.css"

export const Login = (props) => {

    const history = useHistory();

    function foo(){
        if(login()){
            history.push("/home");
        }
    }

    return (
        <>
            <Alert color="danger" className="alertbox" id="db" >
                This is a danger alert — check it out!
            </Alert>
            <Jumbotron className="form_jumbo pt-15 pb-15">
                <Form className="login-form bg-gray p-0">
                    <h1 className="font-weight-bold pt-0 pb-4 mt-0">Login</h1>
                    <FormGroup>
                        <Label>Email</Label><br/>
                        <Input id= "emailinput" type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label><br/>
                        <Input id="passwordinput" type="password" placeholder="Password"/>
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" onClick={foo}> Log in </Button>
                    <div className="login-links">
                        <Link to="/register">sign up</Link> 
                        <span className="p">|</span>
                        <Link to="/forgot">Forgot password?</Link>
                    </div>
                </Form>
            </Jumbotron>
        </>
    )
}