import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, CardText, Input, FormGroup, Button } from 'reactstrap';

const QuizChooseBlocks = () => (
    <Card outline color="primary" className="mb-3">
        <CardHeader className="text-white bg-primary">Choose block from list</CardHeader>
        <CardBody>
                    <Row><Col>
                    <ul class="list-group">
                        <li class="list-group-item">Welcom</li>
                        <li class="list-group-item">Short text</li>
                        <li class="list-group-item">Long text</li>
                        <li class="list-group-item">Multiple choice</li>
                        <li class="list-group-item">Picture choice</li>
                        <li class="list-group-item">Yes/No</li>
                        <li class="list-group-item">Thank you screen</li>
                    </ul>                   
                    </Col></Row>
    </CardBody>
    </Card>
)

export default QuizChooseBlocks;