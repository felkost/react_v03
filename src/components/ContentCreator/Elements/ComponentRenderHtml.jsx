import React, { Component , PropTypes} from 'react';
import ReactDOM from 'react-dom';

function relWidth(w) {
    return String(Math.round(100*w / document.getElementById("edit-root").clientWidth)) + "vw";
}

function relHeight(h) {
    return String(Math.round(100*h / document.getElementById("edit-root").clientHeight)) + "vh";
}

function generateAnimation(begType, begDur, endType, endDur, totalDur) {
    var answer = ""
    if (begType == "fade") 
        answer += "0% {opacity: 0;} " + String(Math.round(100*begDur/totalDur)) + "% {opacity: 1;}"
    if (begType == "zoom") 
        answer += "0% {transform: scale(0);} " + String(Math.round(100*begDur/totalDur)) + "% {transform: scale(1);}"
    
    if (endType == "fade") 
        answer += String(Math.round(100*(1 - endDur/totalDur))) + "% {opacity: 1;}" + "100% {opacity: 0;} "
    if (endType == "zoom") 
        answer += String(Math.round(100*(1 - endDur/totalDur))) + "% {transform: scale(1);}" + "100% {transform: scale(0);}"
    return answer;
}

function renderHtml(totalDuration, e, ref_callback) {
    let componentsToRender=[];
    let anims=[];
    e.map((element, i) => {
        //if (element.trenderElement)
        componentsToRender.push(<ComponentRenderHtml ref={c => { if(ref_callback)ref_callback[`componentRenderHtml${i}`] = c; }}  key={i} saveState={element}/>);
        var animName = "anim_" + element.animationIn + String(element.animationDurationIn) + element.animationOut + String(element.animationDurationOut);
        console.log(animName);
        anims[animName] = generateAnimation(element.animationIn, element.animationDurationIn, 
            element.animationOut, element.animationDurationOut, totalDuration);
    });
    var stringStyle='';
    console.log(anims);
    for(var k in anims)
      stringStyle += "@keyframes "+k+" {"+anims[k]+"}" + '\n' + '.class_' + k + " { animation: " + k + " " + String(totalDuration)+"s forwards;}\n"
    componentsToRender.unshift(<style scoped>{stringStyle}</style>)
    return componentsToRender
}

class ComponentRenderHtml extends Component {

    state = {
        elementType: "Panel",
        renderElement: true, 
        value: this.props.saveState ? this.props.saveState.value : "Your text",
        panelFocused: false,
        textFocused: false,
        boxPositionX: this.props.saveState ? this.props.saveState.boxPositionX : 100,
        boxPositionY: this.props.saveState ? this.props.saveState.boxPositionY : 100,
        boxPositionWidth: this.props.saveState ? this.props.saveState.boxPositionWidth : 320,
        boxPositionHeight: this.props.saveState ? this.props.saveState.boxPositionHeight : 200,
        animationIn: this.props.saveState ? this.props.saveState.animationIn : "none",
        animationDurationIn: this.props.saveState ? this.props.saveState.animationDurationIn : 1,
        animationOut: this.props.saveState ? this.props.saveState.animationOut : "none", 
        animationDurationOut: this.props.saveState ? this.props.saveState.animationDurationOut : 1,
        boxStyle: {    
            display: 'flex',
            alignItems: 'center',
            zIndex: this.props.saveState ? this.props.saveState.boxStyle.zIndex : 200,
          },
        innerBoxStyle: {    
            backgroundColor: this.props.saveState ? this.props.saveState.innerBoxStyle.backgroundColor : 'transparent',
            display: 'flex',
            alignItems: 'center',
            border: '',
            width: "100%", 
            height: "100%",
            justifyContent: this.props.saveState ? this.props.saveState.innerBoxStyle.justifyContent : "center"
          },
        inlineStyle: {
            flex: 1,    
            textAlign: this.props.saveState ? this.props.saveState.inlineStyle.textAlign : 'center',
            alignSelf:  this.props.saveState ? this.props.saveState.inlineStyle.alignSelf : 'center',
        },
        textStyle:
        {
            color: this.props.saveState ? this.props.saveState.textStyle.color : "black",
            fontSize : this.props.saveState ? this.props.saveState.textStyle.fontSize : 30,
            fontStyle :  this.props.saveState ? this.props.saveState.textStyle.fontStyle : "normal",
            fontWeight : this.props.saveState ? this.props.saveState.textStyle.fontWeight : "normal"
        },
    }      
  
    render() {
        let renderCode;
        console.log(this.state);
        if(this.state.elementType == 'Panel')
        {
            var animName = "class_anim_" + this.state.animationIn + String(this.state.animationDurationIn) + this.state.animationOut + String(this.state.animationDurationOut);
            renderCode =
                <div className={animName}
                     style={
                    {
                        width: relWidth(this.state.boxPositionWidth),
                        height: relWidth(this.state.boxPositionHeight),
                        left: relWidth(this.state.boxPositionX),
                        top: relHeight(this.state.boxPositionY),
                        boxSizing: 'border-box',
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: this.state.innerBoxStyle.justifyContent,
                        backgroundColor: this.state.innerBoxStyle.backgroundColor}}> 
                    <div style = {this.state.boxStyle}>
                        <p style = {this.state.textStyle}>
                            {this.state.value}
                        </p>
                    </div>
                </div>;
        }
        return (
            renderCode
        );
    }
  }

export default ComponentRenderHtml;
export {generateAnimation, renderHtml};