import React from 'react';
import Header from '../Header/Header';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg={3}>sm=true</Col>
                    <Col lg={6}>sm=true</Col>
                    <Col lg={3}>sm=true</Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main;