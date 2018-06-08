import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, CardText, Input, FormGroup, Button } from 'reactstrap';


import { actionToolAddBlock,  actionToolEditlock, actionToolDesignlock} from '../../actions/Quiz/QuizAction';
import {ADD_BLOCK, EDIT_BLOCK, DESIGN_BLOCK} from '../../actions/Quiz/ActionConst'


class QuizButTool extends Component {
    state ={ isPress: false }
    updateState = value => { this.setState(value) }
    handleClick = (event) => {
        let stateValue = !this.state.isPress;
        this.updateState({isPress: stateValue});
        switch (this.props.id){
            case ADD_BLOCK:            
              return this.props.toolAddBlock(stateValue);;
            case EDIT_BLOCK:
              return this.props.toolEditlock(stateValue);
            case DESIGN_BLOCK:
              return this.props.toolDesignlock(stateValue);
            default:
                return;
        }
    }
    render(){
        return(
            <Row><Col><Button onClick={this.handleClick}><h3 className="animated bounce "><em className={this.props.icon}></em></h3></Button></Col></Row>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    toolAddBlock: (value) =>dispatch(actionToolAddBlock(value)),
    toolEditlock: (value) =>dispatch(actionToolEditlock(value)),
    toolDesignlock: (value) =>dispatch(actionToolDesignlock(value))   
  })
export default connect(null, mapDispatchToProps)(QuizButTool);