import React, { Component } from 'react';
import { Row, Col, Button, Modal,  ModalHeader,  ModalBody,  ModalFooter,
    FormGroup, Input } from 'reactstrap';


import { connect } from 'react-redux';
import {actToggleModal, actSetShapeTemplate} from '../../actions/Quiz/QAction';

class QCreateTemplate extends Component {
    handleCancel = () => this.props.toggleModal(!this.props.modal)
    handleSave = () => {
        this.props.toggleModal(!this.props.modal);
        let rows = document.getElementById('newCont_cnt_rows');
        let col = document.getElementById('newCont_cnt_col');
        this.props.setShape({rows:rows, col:col});
        //console.log('QCreateTemplate '+el1.value+' '+el2.value);
    }

    render(){

        return(
        <Modal isOpen={this.props.modal} toggle={this.handleToggleModal}>
             <ModalHeader toggle={this.handleToggleModal}>Set params</ModalHeader>
             <ModalBody>
             <Row>
                <form >
                <FormGroup>
                    <label>Count rows</label>
                    <Input id='newCont_cnt_rows' className="form-control-rounded" type="text" placeholder="1" />
                </FormGroup>
                <FormGroup>
                    <label>Count columns</label>
                    <Input id='newCont_cnt_col' className="form-control-rounded" type="text" placeholder="1" />
                </FormGroup>
                </form>
             </Row>
             </ModalBody>
             <ModalFooter>
               <Button color="primary" onClick={this.handleSave}>Save</Button>{' '}
               <Button color="secondary" onClick={this.handleCancel}>Cancel</Button>
             </ModalFooter>
        </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.rMain.modal
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleModal: (value) => dispatch(actToggleModal(value)),  
    setShape: (value) => dispatch(actSetShapeTemplate(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(QCreateTemplate);
