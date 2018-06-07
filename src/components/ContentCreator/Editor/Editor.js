import React from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import TextPanel from '../Elements/TextPanel';


const Editor = ({textpanels, test}) => {

    return(
        <div className='inner-16x9'>          
            <Layout />
            {textpanels.map((item, id) => (
                <TextPanel key={id} id={id} elementState={item.elementState} />    
            ))}
           
        </div>
        
    )     
}



const mapStateToProps = (state, ownProps) => ({
    contents: state.contents,
    layouts: state.layouts,
    textpanels: state.textpanels
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
// })

export default connect(mapStateToProps)(Editor);