import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, CardText, Input, FormGroup, Button } from 'reactstrap';

import {ADD_BLOCK, EDIT_BLOCK, DESIGN_BLOCK} from '../../actions/Quiz/ActionConst'

import QuizButTool from './QuizButTool'

const QuizTools = () => (
    <Card outline color="primary" className="mb-3">
        <CardHeader className="text-white bg-primary">Tools</CardHeader>
            <CardBody>
                <QuizButTool id={ADD_BLOCK}  icon={"icon-grid"}/>
                <QuizButTool id={EDIT_BLOCK}  icon={"icon-settings"}/>
                <QuizButTool id={DESIGN_BLOCK}  icon={"icon-drop"}/>                
            </CardBody>
    </Card>

)

export default QuizTools;