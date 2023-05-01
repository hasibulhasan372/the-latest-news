import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }

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
                        <Nav className="mx-auto gap-4  fs-5 fw-semibold">
                            <NavLink className='text-decoration-none text-secondary menu-btn' to="/category/0">Home</NavLink>
                            <NavLink className='text-decoration-none text-secondary ' to="/about">About</NavLink>
                            <NavLink className='text-decoration-none text-secondary ' to="/career">Career</NavLink>

                        </Nav>
                        <Nav className='align-items-center fw-semibold gap-4'>
                            {user && <p>Hello User</p>}
                            
                            {
                                user ? <Button onClick={handleLogOut} className='btn btn-primary' >Logout</Button> : <Link to='/login' className='btn btn-primary' >Login</Link>
                            }

                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;



