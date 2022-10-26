import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Leftside from '../../Share/Leftside/Leftside';
import Rightside from '../../Share/Rightside/Rightside';

const Courses = () => {
    const data =useLoaderData()
    // console.log(data);
    
    return (
        <div>
            <h1>This is Courses</h1>
            <Container>
                <Row>
                    <Col lg='2'>
                        <Leftside></Leftside>
                    </Col>
                    <Col lg='10'>
                        <Rightside></Rightside>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;