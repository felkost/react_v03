import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, CardText, Input, FormGroup, Button } from 'reactstrap';

const QuizBlocks = () => (
    <Card outline color="primary" className="mb-3">
        <CardHeader className="text-white bg-primary">Blocks of the questionnaire</CardHeader>
        <CardBody>
                    <Row><Col>
                    <ul className="list-group">
                        <li className="list-group-item">Welcom</li>
                        <li className="list-group-item">Short text</li>
                        <li className="list-group-item">Long text</li>
                        <li className="list-group-item">Multiple choice</li>
                        <li className="list-group-item">Picture choice</li>
                        <li className="list-group-item">Yes/No</li>
                        <li className="list-group-item">Thank you screen</li>
                    </ul>                   
                    </Col></Row>
    </CardBody>
    </Card>
)

export default QuizBlocks;