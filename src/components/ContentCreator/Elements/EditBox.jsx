import React, {Component , PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {setAnimation, updateKeyValue, setZIndex, deleteTextPanel, setTextAlignment} from './../../../actions/ContentCreator/textpanels'
import { SketchPicker } from 'react-color';


class EditBox extends Component {
    state = {
            renderColorPicker : false,
        }

    getButtonClass= (p, q) =>
    {
        if(p === q)
            return "btn btn-primary btn-xs disabled" 
        else
            return "btn btn-secondary btn-xs" 
    }

    render() {
        const { id, elementState, updateKeyValue, deleteTextPanel} = this.props;
        return (
            <div>
                <div className="btn-group"  ref={c => { this.buttonBox = c; }}>
                    <button className={this.getButtonClass(elementState.innerBoxStyle.justifyContent, "flex-start")} onClick={() => {updateKeyValue(id, "justifyContent", "flex-start", 'innerBoxStyle')}}> <em className="fa fa-align-left"></em> </button>
                    <button className={this.getButtonClass(elementState.innerBoxStyle.justifyContent, "center")} onClick={() => {updateKeyValue(id, "justifyContent", "center", 'innerBoxStyle')}}> <em className="fa fa-align-center"></em> </button>
                    <button className={this.getButtonClass(elementState.innerBoxStyle.justifyContent, "flex-end")} onClick={() => {updateKeyValue(id, "justifyContent", "flex-end", 'innerBoxStyle')}}> <em className="fa fa-align-right"></em> </button>
                    
                    <button className="btn btn-secondary btn-xs" onClick={() => this.setState({ renderColorPicker: true })}><em className="fa fa-paint-brush"></em></button>
                    <button className="btn btn-secondary btn-xs" onClick={() => updateKeyValue(id, "zIndex", elementState.boxStyle.zIndex+1, 'boxStyle')}><em className="fa fa-level-up"></em></button>
                    <button className="btn btn-secondary btn-xs" onClick={() => updateKeyValue(id, "zIndex", elementState.boxStyle.zIndex-1, 'boxStyle')}><em className="fa fa-level-down"></em></button>
                    <button className="btn btn-secondary btn-xs" onClick={() => deleteTextPanel(id)}><em className="fa fa-trash"></em> </button>
                </div>

                <div className="btn-group" ref={c => { this.buttonBox2 = c; }}>
                    <button className={this.getButtonClass(elementState.animationIn, "in_fade")} onClick={() => {updateKeyValue(id, "animationIn", "in_fade", null)}}> <em className="fa fa-bullseye"></em> </button>
                    <button className={this.getButtonClass(elementState.animationIn, "in_zoom")} onClick={() => {updateKeyValue(id, "animationIn", "in_zoom", null)}}> <em className="fa fa-arrows"></em> </button>
                    <button className={this.getButtonClass(elementState.animationIn, "out_fade")} onClick={() => {updateKeyValue(id, "animationIn", "out_fade", null)}}> <em className="fa fa-bullseye"></em> </button>
                    <button className={this.getButtonClass(elementState.animationIn, "out_zoom")} onClick={() => {updateKeyValue(id, "animationIn", "out_zoom", null)}}> <em className="fa fa-arrows"></em> </button>
                </div>
                {this.state.renderColorPicker ? <SketchPicker onChangeComplete={(color) => {updateKeyValue(id, "backgroundColor", color.hex, "innerBoxStyle")}} /> : null}
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    elementState: state.textpanels[ownProps.id].elementState,  
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateKeyValue: (id, key, value, level) => { dispatch(updateKeyValue(id, key, value, level))},
  deleteTextPanel : (id) => dispatch(deleteTextPanel(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBox)
