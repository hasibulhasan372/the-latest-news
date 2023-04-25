import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGooglePlusG, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div>
                <Button variant="outline-primary" className='w-100 mb-2 fs-5 fw-semibold'> <FaGooglePlusG className='fs-3' /> Login with Google</Button>
                <Button variant="outline-secondary" className='w-100 fs-5 fw-semibold'> <FaGithub className='fs-3' /> Login with Github</Button>
            </div>
            <div className='mt-5 '>
                <h3>Find Us On</h3>
                <div className=' mt-4'>
                    <ListGroup>
                        <ListGroup.Item className='py-3 fs-4 fw-semibold'><FaFacebook className='me-3 fs-3  text-info' /> Facebook</ListGroup.Item>
                        <ListGroup.Item className='py-3 fs-4 fw-semibold'><FaTwitter className=' me-3 fs-3  text-info' /> Twitter</ListGroup.Item>
                        <ListGroup.Item className='py-3 fs-4 fw-semibold'><FaInstagram className=' me-3 fs-3  text-info' /> Instagram</ListGroup.Item>
                    </ListGroup>
                </div>
                <QZone></QZone>
                <div className='my-5'>
                        <div className='create-newspaper p-5 text-center'>
                            <h2 className='text-white fw-bold'>Create an Amazing Newspaper</h2>
                            <p className='text-white fs-5 fw-semibold my-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                            <Button className='w-100 rounded-0 fw-semibold fs-5 py-4 mt-3' variant="danger">Learn More</Button>

                        </div>
                </div>

            </div>
        </div>
    );
};

export default RightNav;
