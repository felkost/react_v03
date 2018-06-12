import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Button } from 'reactstrap';


import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import {actToggleModal, actNewQuiz} from '../../actions/Quiz/QAction';  
import QCreateTemplate from './QCreateTemplate';

class QNewContainer extends Component {

    handleCreateTemlate = () =>  this.props.toggleModal(!this.props.modal)
   

    handleCancel=(e) =>  this.props.newQuiz('MainContainer')

    render(){

        return(
            <ContentWrapper>
            <Row>
                <Col>
                <div className="content-heading">
                    <div>
                        <Button  className="btn btn-primary" onClick={this.handleCreateTemlate}>Create template</Button>
                    </div>
                    <div>
                        <Button  className="btn btn-primary" >Save</Button>
                    </div>
                    <div>
                        <Button  className="btn btn-primary" onClick={this.handleCancel}>Cancel</Button>
                    </div>
                </div>
                </Col>            
            </Row>
            <Row>
                <Col> 
                    QNewContainer
                </Col>
                <Col md={3}>
                    Tools
                </Col>
            </Row>
            <QCreateTemplate />
            </ContentWrapper>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.rMain.modal
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    newQuiz: (value) => dispatch(actNewQuiz(value)), 
    toggleModal: (value) => dispatch(actToggleModal(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(QNewContainer);
