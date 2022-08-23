 
import React, { useState } from 'react'
import { Button, Container, Form, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './signUp.css'
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password,  SetPassword] = useState('')
    const handleSubmit=()=>{

    }
    
  return (
    <Container> 
    <Row>
        <Col md={6} className='signUp__form--container' >
            <Form style={{width :'100%'}} onSubmit=''>
                <h1>Create An Account</h1>

                <Form.Group className='mb-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>e.target.value}  required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='password' value={password} onChange={(e)=>e.target.value} required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Button type='submit' >Login</Button>
                </Form.Group>
                <p>I have an Account<Link to='/login'> Login Account</Link> </p>

            </Form>
        </Col>
        <Col md={6} className='signup__image-container'></Col>
    </Row>
</Container>
  )
}

export default SignUp