import React from 'react';

import { Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import login from '../services/login.services';

import "../styles/login.styles.css"

function form() {
    return (
        <Jumbotron className="form_jumbo">
            <Form className="login-form bg-gray">
                <h1 className="font-weight-bold">Login</h1>
                <FormGroup>
                    <Label>Email</Label><br/>
                    <Input id= "emailinput" type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label><br/>
                    <Input id="passwordinput" type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block" onClick={() => {login()}}> Log in </Button>
                <div className="login-links">
                    <a href="/register">sign up</a> 
                    <span className="p">|</span>
                    <a href="/forgot">Forgot password?</a>
                </div>
            </Form>
        </Jumbotron>
        
    )
}

export default form;