import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, CardText, Input, FormGroup, Button } from 'reactstrap';

const QuizDesignBlock = () => (
    <Card outline color="primary" className="mb-3">
        <CardHeader className="text-white bg-primary">Edit design of the block</CardHeader>
        <CardBody>
                    <Row><Col>
                    <ul className="list-group">
                        <li className="list-group-item">Welcom</li>
                    </ul>                   
                    </Col></Row>
    </CardBody>
    </Card>
)

export default QuizDesignBlock;