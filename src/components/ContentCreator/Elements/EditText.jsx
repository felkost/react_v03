import React, {Component , PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {updateKeyValue} from './../../../actions/ContentCreator/textpanels'

let fontSize = 3;

export class EditText extends Component {

    

    getButtonClass= (p, q) =>
    {
        if(p === q)
            return "btn btn-primary btn-xs" 
        else
            return "btn btn-secondary btn-xs" 
    }

    selRange = () => 
    {
        let selectedRange = window.getSelection().getRangeAt(0);
        let selectedNode = selectedRange.commonAncestorContainer;
       // console.log("selected node: ", selectedNode);
       // console.log("selected node value: ", selectedNode.nodeValue);
       // console.log("selection chars range: START POS: ", selectedRange.startOffset);
       // console.log("selection chars range: END POS: ", selectedRange.endOffset);
        document.execCommand('bold', false, null);
        document.execCommand('fontSize', false, "7");
    }

    selectText = (el) => 
    {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }


    render() {
        const { id, elementState, updateKeyValue, wait, test, selObj} = this.props;
        
        return (
            <div style={{position: "absolute", paddingBottom: this.props.height*2}}>
                <div className="btn-group"  ref={c => { this.buttonBox = c; }}>
                    <button className="btn btn-secondary btn-xs" onClick={() => {this.props.selectAllText()}}> <em className="fa fa-file-text"></em> </button>
                    <button className="btn btn-secondary btn-xs" onClick={() => {document.execCommand('bold', false, null);}}> <em className="fa fa-bold"></em> </button>
                    <button className="btn btn-secondary btn-xs" onClick={() => {document.execCommand('italic', false, null);}}> <em className="fa fa-italic"></em> </button>
                    <button className="btn btn-secondary btn-xs" onClick={() => {fontSize=fontSize+1; document.execCommand('fontSize', false, fontSize); }}><em className="fa fa-text-height"></em></button>
                    <button className="btn btn-secondary btn-xs" onClick={() => {fontSize=fontSize-1; document.execCommand('fontSize', false, fontSize); }}><em className="fa fa-text-height"></em></button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({ 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateKeyValue: (id, key, value, level) => { dispatch(updateKeyValue(id, key, value, level))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditText)
