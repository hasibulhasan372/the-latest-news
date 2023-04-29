import React from 'react';
import Header from '../../shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
            <Header></Header>
                <Container>
                <Row className='justify-content-center mt-4'>
                    <Col lg={4}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
                </Container>
        </>
    );
};

export default AuthLayout;