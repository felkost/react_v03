import React, {Component , PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Rnd from 'react-rnd';
import EditBox from './EditBox';
import EditText from './EditText';
import {deleteTextPanel, updatePanelState, setPanelFocused} from './../../../actions/ContentCreator/textpanels'

let borderUnfocused = '1px dashed gray';
let borderFocused = '2px solid blue';

class TextPanel extends Component {

    state = {
        activeBox : false,
        activeText: false
    }

    selectText = (el) => 
    {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        this.textField.focus();
        this.setState({activeText : true});
    }
 
    render() {
      const { elementState, onClickText, deleteTextPanel, id, updatePanelState, activeState, setPanelFocused} = this.props;
      let selObj = document.activeElement.parentNode;
      //window.getSelection().focusNode;
      return (
            <React.Fragment>
                <Rnd ref={c => { this.rndBox = c; }} 
                    enableUserSelectHack = {false}
                    onDragStop={(e, d) => {elementState.position.x = d.x, elementState.position.y = d.y, updatePanelState(elementState)}}
                    onResize={(e, direction, ref, delta, position) => {elementState.position.w = ref.offsetWidth, elementState.position.h =  ref.offsetHeight, updatePanelState(elementState)}}
                    style={(this.state.active) ? {border : borderFocused} : {border:  borderUnfocused}}
                    default={elementState.boxPosition}  
                    class="container-fluid" >
                        {(elementState.focused === true )?<EditText id={id} ref={c => {this.editText = c;}} height={this.textField.offsetHeight} selectAllText={() => this.selectText(this.textField)} /> : null }
                        <div tabIndex="0" ref={c => {this.innerBox = c;}} style={elementState.innerBoxStyle} onFocus={() => this.setState({activeBox : true})}  onBlur={() => setTimeout(function() {this.setState({activeBox : false})}.bind(this), 500)}>                    
                            <div
                                ref={c => {this.textField = c;}}
                                style={{cursor: 'text'}}
                                onFocus={() => {setPanelFocused(), console.log(id)}} //selObj.focusNode.style.fontWeight =  "bold"}  document.execCommand('bold', false, null);}
                                //onBlur = {(e) => {setTimeout(function() {this.setState({activeText : false})}.bind(this), 500)}}
                                //onBlur = {() => console.log(selObj.isEqualNode(this.textField.parentNode))}
                                contentEditable={true}
                                suppressContentEditableWarning={true} 
                                onSelect = {() => {setPanelFocused(id)}}>
                                {elementState.value}
                                {id}
                            </div>
                        </div>
                        {(elementState.focused === true)?<EditBox id={id} ref={c => {this.editBox = c;}} /> : null }
                </Rnd>
            </React.Fragment>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => ({
      elementState: state.textpanels[ownProps.id].elementState
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    updatePanelState: (id) => { dispatch(updatePanelState(id, ownProps))},
    setPanelFocused: () => { dispatch(setPanelFocused(ownProps.id))},
    deleteTextPanel : element => dispatch(deleteTextPanel(element)),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TextPanel)
  