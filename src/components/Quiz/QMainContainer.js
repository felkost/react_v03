import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Button } from 'reactstrap';



import { connect } from 'react-redux';
import {actNewQuiz} from '../../actions/Quiz/QAction';
import QNewContainer from './QNewContainer'



//import QuizDesignBlock from './QuizDesignBlock'
//import QuizBlocks from './QuizBlocks'
//import QuizPrewie from './QuizPrewie'


class QMainContainer extends Component {

    handleNewQuiz = (e) => {
        this.props.newQuiz('NewContainer');
    }


    render(){
        let arr = ['Quiz 1', 'Quiz 2', 'Quiz 3']; 
        return(
         this.props.viewContainer==='NewContainer'? <QNewContainer />
        :<ContentWrapper>
        <Row>
            <Col>
                <div className="content-heading">
                        <div>
                            <Button  className="btn btn-primary" onClick={this.handleNewQuiz}>New</Button>
                        </div>
                        <div>
                            <Button  className="btn btn-primary">Update list</Button>
                        </div>
                </div>  
            </Col>            
        </Row>
        <Row>
            <Col> 
                <ul>{arr.map((val, ndx) => {
                    return <li key={ndx}>{val}<Button>Edit</Button><Button>View</Button><Button>Delete</Button></li>
                    }
                )}
                </ul>
            </Col>
        </Row>
        </ContentWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        viewContainer: state.rMain.view
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    newQuiz: (value) => dispatch(actNewQuiz(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(QMainContainer);