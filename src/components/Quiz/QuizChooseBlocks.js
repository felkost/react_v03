import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, CardText, Input, FormGroup, Button } from 'reactstrap';

import { connect } from 'react-redux';
import {actionAddBlockToList, actionDelBlockFromList} from '../../actions/Quiz/QuizAction'

class QuizChooseBlocks extends Component{
    handleAddBlock = (e) => {
        this.props.addBlock(e.target.id)
    }

    handleDelBlock = (e) => {
        this.props.delBlock(e.target.id)
    }
  //<button id={i} onClick={this.handleDelBlock}>Del</button>

    render(){
        return(
        <Card outline color="primary" className="mb-3">
            <CardHeader className="text-white bg-primary">Choose block from list</CardHeader>
            <CardBody>
                        <Row><Col>
                        <ul className="list-group">
                        {this.props.listBloks.map((block, i) =>
                            <li key={i} >
                                {block}
                                <button id={i} onClick={this.handleAddBlock}>Add</button>
                                
                            </li>
                        )                            
                        }
                        </ul>                   
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