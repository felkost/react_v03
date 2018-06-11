import React, { Component } from 'react';
import { Row, Col, Button} from 'reactstrap';

import { connect } from 'react-redux';
import {actionDelBlockFromList} from '../../actions/Quiz/QuizAction'

class QuizItemBlock extends Component{ 
    state = {idItem: this.props.id}
    handleDelBlock = (e) => {
        //this.props.delBlock(e.target.id)
        console.log('QuizItemBlock: ' + this.state.idItem)
    }

    render(){

        return(
            <Row className="align-items-center">
                <Col ><em className="fa fa-reorder fa-fw text-muted mr-lg"></em>{this.props.value}</Col>
                <Col md={3}>
                    <button color="secondary" className="btn-oval"  onClick={this.handleDelBlock.bind(this)}>
                        <i className="icon-close" onClick={this.handleDelBlock.bind(this)}></i>
                    </button>
                </Col>                                
            </Row>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    delBlock: id => dispatch(actionDelBlockFromList(id))
})

export default connect(null, mapDispatchToProps)(QuizItemBlock);