import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserRegister = (props) => {
    
    
return (

    <div className="cont">
        <h1>User Register Page</h1>
        <Form id='registerForm'>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="registerEmail">Email</Label>
                        <Input type="email" name="email" id="registerEmail" placeholder="Email" required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="registerPassword">Password</Label>
                        <Input type="password" name="password" id="registerPassword" placeholder="Password" required/>
                    </FormGroup>
                </Col>
            </Row>
                    <FormGroup>
                        <Label for="registerName">Name</Label>
                        <Input type="text" name="name" id="registerName" placeholder="Name" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerAddress">Address</Label>
                        <Input type="text" name="address" id="registerAddress" placeholder="Home Address" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="registerAddress2">Address 2</Label>
                        <Input type="text" name="address2" id="registerAddress2" placeholder="Apartment, studio, or floor"/>
                    </FormGroup>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="registerCity">City</Label>
                        <Input type="text" name="city" id="registerCity" required/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="registerState">State</Label>
                        <Input type="text" name="state" id="registerState" required/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="registerZip">Zip</Label>
                        <Input type="text" name="zip" id="registerZip" required/>
                    </FormGroup>  
                </Col>
            </Row>
                    <FormGroup check>
                        <Input type="checkbox" name="check" id="subscribeCheck"/>
                        <Label for="subscribeCheck" check>Subscribe to our Email List</Label>
                    </FormGroup>
                    <Button>Sign Up</Button>
        </Form>
    </div>
    );
}

export default UserRegister;