import React from 'react';

import { Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import login from '../services/login.services';
import resetpassword from '../components/forgotpass.components';

import "../styles/login.styles.css"

function form() {
    return (
        <Jumbotron className="form_jumbo">
            <Form className="login-form bg-gray">
                <FormGroup>
                    <Label className="p-2 mt-10"><strong>Email para enviar chave:</strong></Label><br/>
                    <Input id= "emailinput" type="email" placeholder="Email" />
                </FormGroup>
                <Label>entre o email vinculado a sua conta</Label><br/>
                <Button className="btn-block" onClick={()=>{resetpassword()}}>Enviar</Button>
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