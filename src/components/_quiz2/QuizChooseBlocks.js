import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardBody, CardHeader, ListGroup, ListGroupItem, Button } from 'reactstrap';

import { connect } from 'react-redux';
import {actionAddBlockToList, actionDelBlockFromList} from '../../actions/Quiz/QuizAction'

class QuizChooseBlocks extends Component{
    handleAddBlock = (e) => {
        //console.log(e.target);
        this.props.addBlock(e.target.id)
    }

    render(){
        return(
        <Card outline color="primary" className="mb-3">
            <CardHeader className="text-white bg-primary">Choose block from list</CardHeader>
            <CardBody>
                        <Row><Col>
                        <ListGroup>
                        {this.props.listBloks.map((block, i) =>
                            <ListGroupItem key={i} >
                                <Row className="align-items-center">
                                    <Col ><em className="fa fa-reorder fa-fw text-muted mr-lg"></em>{block}</Col>
                                    <Col md={3}>
                                        <button color="secondary" className="btn-oval" id={i}  onClick={this.handleAddBlock}>
                                            <i className="icon-plus" id={i}></i>
                                        </button>
                                    </Col>                                
                                </Row>    
                            </ListGroupItem>
                        )                            
                        }
                        </ListGroup>                   
                        </Col></Row>
        </CardBody>
        </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    listBloks : state.rListBlocks.dictionary
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addBlock: id => dispatch(actionAddBlockToList(id)),
    delBlock: id => dispatch(actionDelBlockFromList(id)),
})



export default connect(mapStateToProps, mapDispatchToProps)(QuizChooseBlocks);