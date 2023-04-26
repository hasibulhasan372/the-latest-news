import React from 'react';
import Header from '../Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../../shared/RightNav/Rightnav';
import LeftNav from '../../shared/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
           
            <Container className="mt-4">

                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>Main Content </Col>
                    <Col lg={3} >
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main;