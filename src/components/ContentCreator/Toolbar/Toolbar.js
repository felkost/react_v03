import React from 'react';
import { connect } from 'react-redux';
import {
    Button,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { addTextPanel } from '../../../actions/ContentCreator/textpanels';
import { toggleTab } from '../../../actions/ContentCreator/toolbar';
import LayoutPanelPreview from './LayoutPreview';


const Toolbar = ({ addPanel, toolbar, toggleTab }) => (
    <div>
        <Nav tabs justified>
            <NavItem>
                <NavLink className={toolbar.activeTab === 'tools' ? 'active' : ''} onClick={() => toggleTab('tools')}>
                    <em className="fa fa-align-justify fa-fw"></em> tools
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={toolbar.activeTab === 'layouts' ? 'active' : ''} onClick={() => toggleTab('layouts')} >
                    <em className="icon-layers"></em> layouts
                </NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={toolbar.activeTab} className="bg-white p-0">
            <TabPane tabId="tools">
                <div className="card-footer text-left">
                    <Button color="primary" onClick={addPanel}>Add panel</Button>
                </div>
            </TabPane>
            <TabPane tabId="layouts">
                <Container style={{ padding: 20 }}>
                    <LayoutPanelPreview />
                </Container>
            </TabPane>
        </TabContent>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    toolbar: state.toolbar
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addPanel: id => {dispatch(addTextPanel(id, {state: 'test'})); console.log('add')},
    toggleTab: tab => {dispatch(toggleTab(tab))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);