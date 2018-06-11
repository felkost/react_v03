import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Row, Col, Card, CardTitle, CardBody, CardHeader, ListGroup, ListGroupItem, Button} from 'reactstrap';

import QuizItemBlock from './QuizItemBlock';

import {actionUpdateOrderListBloks} from '../../actions/Quiz/QuizAction'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({items, dict}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={ dict[value] } />
      ))}
    </ul>
  );
});

class QuizBlocks extends Component{ 
    state = {
        items: [],
        dictionary: []
      };

    onSortEnd = ({oldIndex, newIndex}) => {
        console.log('props --> '+this.props.listVisible);
        //this.setState({items: this.props.listVisible})
        console.log('items old --> '+this.state.items+' || '+oldIndex+' || '+newIndex);
        this.setState({
          items: arrayMove(this.state.items, oldIndex, newIndex),
        });

        console.log('items new --> '+this.state.items+' || '+oldIndex+' || '+newIndex);
        this.props.updateList(this.state.items)
    };
 
    componentWillReceiveProps(nextProps) {
        this.setState({items: nextProps.listVisible});
        this.setState({dictionary: nextProps.dictionary});
    }
      
    render(){ 
        return(
            <Card outline color="primary" className="mb-3">
                <CardHeader className="text-white bg-primary">Blocks of the questionnaire</CardHeader>
                <CardBody>
                    <Row><Col > 
                    <SortableList items={ this.state.items }  dict={ this.state.dictionary } onSortEnd={this.onSortEnd} />    
                    </Col></Row>
            </CardBody>
            </Card>
        )
    }
}



const mapStateToProps = (state) => ({
    listVisible : state.rListBlocks.listVisible,
    dictionary : state.rListBlocks.dictionary
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    updateList: list => dispatch(actionUpdateOrderListBloks(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizBlocks);