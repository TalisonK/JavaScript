import React from 'react';

import { Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import Register  from '../services/register.services';

import "../styles/login.styles.css"

function register() {
    return (
        <Jumbotron className="form_jumbo">
            <Form className="login-form bg-gray">
                <h1 className="font-weight-bold">Register</h1>
                <FormGroup>
                    <Label>Email</Label><br/>
                    <Input id= "emailinput" type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label><br/>
                    <Input id="passwordinput" type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block" onClick={() => {Register()}}> Sign in </Button>
                <div className="login-links">
                    <a href="/">Back</a> 
                </div>
            </Form>
        </Jumbotron>
        
    )
}

export default register;