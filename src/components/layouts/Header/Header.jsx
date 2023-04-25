import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='text-center'>
            <img className='img-fluid' src={logo} alt="" />
            <h4>Journalism Without Fear or Favour</h4>
            <p>{moment().format("dddd, MMMM D YYYY")}</p>
            <div className='d-flex gap-4 px-2 px-lg-4 py-4 bg-light rounded'>
                <Button variant="danger" className='fs-5 fw-semibold'>Latest</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>

            </div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='mt-3'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-5 fw-semibold">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav className='align-items-center fw-semibold'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">Login</Button>

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;



