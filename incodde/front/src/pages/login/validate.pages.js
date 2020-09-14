import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';

import {validating} from '../../components/forgotpass.components';

import "../../styles/login.styles.css"

export const Confirmation = () => (
    <Jumbotron className="form_jumbo">
    <Form className="login-form bg-gray">
        <FormGroup>
            <Label className="p-2 mt-10"><strong>chave:</strong></Label><br/>
            <Input id= "validateinput" type="email" placeholder="Email" />
        </FormGroup>
        <Button className="btn-block" href="/confirmation" onClick={()=>{validating()} }>Enviar</Button>
        <div className="login-links">
            <Link to="/">back</Link> 
            <span className="p">|</span>
            <a onClick={() => {}}>Reenviar</a>
        </div>
    </Form>
</Jumbotron>
)