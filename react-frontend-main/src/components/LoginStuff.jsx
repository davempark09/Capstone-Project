import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginStuff = (props) => {
  return (
      <div className="cont">
      <h1>Login Page</h1>
    <Form>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Email" required/>
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" placeholder="Password" required/>
      </FormGroup>
      <Button>Submit</Button>
      <Button a href="/user-register">Register</Button>
    </Form>
    </div>
  );
}

export default LoginStuff;