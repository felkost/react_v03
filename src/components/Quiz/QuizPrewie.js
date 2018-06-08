import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, CardText, Input, FormGroup, Button } from 'reactstrap';

const QuizPrewie = () => (
    <Card outline color="primary" className="mb-3">
        <CardHeader className="text-white bg-primary">Blocks of the questionnaire</CardHeader>
        <CardBody>
                    <Row><Col>
                    <ul className="list-group">
                        <li className="list-group-item"><h1 className="text-center"><i className="fa fa-file-image-o" aria-hidden="true"></i></h1></li>
                        <li className="list-group-item text-center">Start</li>
                        <li className="list-group-item text-center">press Enter</li>
                    </ul>                   
                    </Col></Row>
    </CardBody>
    </Card>
)

export default QuizPrewie;