import React, { useState } from 'react'
import { Button, Container, Form, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password,  SetPassword] = useState('')
    const handleSubmit=()=>{

    }
  return (
    <Container> 
        <Row>
            <Col md={6} className='login__form--container' >
                <Form style={{width :'100%'}} onSubmit=''>
                    <h1>Login to your Account</h1>

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
                    <p>Don't have an account <Link to='/signup'>Create Account</Link> </p>

                </Form>
            </Col>
            <Col md={6} className='login__image-container'></Col>
        </Row>
    </Container>
  )
}

export default Login