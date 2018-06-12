import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, CardText, ListGroup, ListGroupItem, Button } from 'reactstrap';

import {ADD_BLOCK, EDIT_BLOCK, DESIGN_BLOCK} from '../../actions/Quiz/ActionConst'
import QuizTools from './QuizTools'
import QuizEditBlock from './QuizEditBlock'
import QuizChooseBlocks from './QuizChooseBlocks'
import QuizDesignBlock from './QuizDesignBlock'
import QuizBlocks from './QuizBlocks'
import QuizPrewie from './QuizPrewie'


class QuizContainer extends Component {
    render(){
        return(
        <ContentWrapper>
        <Row>
                <Col>
                    <div className="content-heading">
                        <div>
                        <button type="button" className="btn ">Save</button>
                        </div>
                    </div>
                </Col>            
            </Row>
            <Row>
                <Col>
                    <QuizPrewie />       
                </Col>
                <Col md={3}>
                    <QuizBlocks />
                </Col>
                { (this.props.isPress.button==ADD_BLOCK && this.props.isPress.isPress==true)? 
                   <Col ><QuizChooseBlocks /> </Col> 
                   : <div></div> } 
                { (this.props.isPress.button==EDIT_BLOCK && this.props.isPress.isPress==true)? 
                    <Col ><QuizEditBlock /> </Col> 
                    : <div></div> } 
                { (this.props.isPress.button==DESIGN_BLOCK && this.props.isPress.isPress==true)? 
                    <Col ><QuizDesignBlock /> </Col> 
                    : <div></div> }            
                <Col className="col-1">
                    <QuizTools />
                </Col>
            </Row>
        </ContentWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isPress: state.rToolsState
    }
}
export default connect(mapStateToProps)(QuizContainer);