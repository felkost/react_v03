import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, CardText, Input, FormGroup, Button } from 'reactstrap';

const QuizEditBlock = () => (
    <Card outline color="primary" className="mb-3">
        <CardHeader className="text-white bg-primary">Edit block</CardHeader>
        <CardBody>
                    <Row><Col>
                    <ul className="list-group">
                    <li className="list-group-item">Text</li>
                    <li className="list-group-item">Image</li>
                    <li className="list-group-item">Video</li>
                    <li className="list-group-item">Delete</li>
                    </ul>                   
                    </Col></Row>
    </CardBody>
    </Card>
)

export default QuizEditBlock;