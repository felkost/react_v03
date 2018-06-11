import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';

import { Row, Col, Button} from 'reactstrap';


class QuizItemBlock extends Component{ 
    
    render(){

        return(
            <Row className="align-items-center">
                <Col ><em className="fa fa-reorder fa-fw text-muted mr-lg"></em>{this.props.val}</Col>
                <Col md={3}><Button color="secondary" className="btn-oval">
                <i className="icon-close"></i></Button></Col>                                
            </Row>
        )
    }
}

export default QuizItemBlock;