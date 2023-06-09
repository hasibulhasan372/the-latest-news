import React from 'react';
import Header from '../../shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../../shared/RightNav/Rightnav';
import LeftNav from '../../shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Container className="mt-4">
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3} >
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Main;