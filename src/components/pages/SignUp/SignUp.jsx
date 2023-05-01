import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [accept, setAccept] = useState(false)

    const navigate = useNavigate()
    const handleSignUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            const signUpUser = result.user;
            navigate('/login')
        })
        .then(error =>{
            console.log(error)
        })
        
    };
    const handleChecked = e =>{
        setAccept(e.target.checked)

    }

    return (
        <Container >
            <h2>Please Sign Up </h2>
        <Form onSubmit={handleSignUp} className=' border p-4 rounded'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Enter Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                onClick={handleChecked}
                 type="checkbox"
                  label={<>Accept <Link to='/terms'>Terms and Condition </Link></>} />
            </Form.Group>
            <Button variant="primary" disabled={!accept} type="submit">
                Submit
            </Button>
            <br />

            <Form.Text className="text-muted">
                   Already have an account? <Link to='/login'>Login</Link>
                </Form.Text>
        </Form>
    </Container>
    );
};

export default SignUp;