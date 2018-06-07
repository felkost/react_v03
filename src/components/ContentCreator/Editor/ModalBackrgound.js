import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Button,
    Modal,
    ModalFooter,
    CardColumns
} from 'reactstrap';
import { ChromePicker } from 'react-color';
import { changeBackground } from '../../../actions/ContentCreator/layouts';
import { setVideoToBackground } from '../../../actions/ContentCreator/layouts';


class EditLayout extends Component {

    state = {
        activeTab: 'image',
        colorSelected: '#bebebe',
        layoutId: this.props.layoutId,
    }

    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    handleColorComplete = (color) => {
        this.setState({ colorSelected: color.hex });
        this.props.changeBackground(this.state.layoutId, color.hex);
    };

    handleImageBackgroundChange = (back) => {
        this.props.changeBackground(this.state.layoutId, back);
    };


    render() {

        const { editMode } = this.props;

        return (
            <Modal
                centered
                size='lg'
                isOpen={editMode}
                toggle={() => this.props.closeEditDialog()}>
                <Nav tabs justified>
                    <NavItem>
                        <NavLink className={this.state.activeTab === 'image' ? 'active' : ''}
                            onClick={() => { this.toggleTab('image'); }}
                        >
                            <em className="fa fa-image fa-fw"></em> image
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={this.state.activeTab === 'color' ? 'active' : ''}
                            onClick={() => { this.toggleTab('color'); }}
                        >
                            <em className="fa fa-adjust fa-fw"></em> color
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={this.state.activeTab === 'video' ? 'active' : ''}
                            onClick={() => { this.toggleTab('video'); }}
                        >
                            <em className="fa fa-video-camera fa-fw"></em> video
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} className="bg-white p-0" >
                    <TabPane tabId="image">
                        <div className="container" style={{ paddingTop: 20 }}>
                            <CardColumns>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                                    <div className="card mb-4" key={item}>
                                        <img className="card-img-top img-fluid" alt="Card cap"
                                            src={`img/bg${item}.jpg`}
                                            onClick={() => this.handleImageBackgroundChange("url('img/bg" + item + ".jpg') 100% 100%/cover no-repeat")}
                                        />
                                    </div>
                                ))}
                            </CardColumns>
                        </div>
                    </TabPane>
                    <TabPane tabId="color">
                        <div className="container" style={{ padding: 20 }}>
                            <ChromePicker
                                color={this.state.colorSelected}
                                onChangeComplete={this.handleColorComplete}
                            />
                        </div>
                    </TabPane>
                    <TabPane tabId="video">
                        <div className="container" style={{ paddingTop: 20 }}>
                            <CardColumns>
                                <div className="card mb-4" >
                                    <img className="card-img-top img-fluid" alt="Card cap"
                                        src={`img/bg1.jpg`}
                                        onClick={() => this.props.setBackgroundVideo(this.state.layoutId, "http://kt-trade.xyz/biggame.mp4")}
                                    />
                                </div>
                            </CardColumns>
                        </div>
                    </TabPane>
                </TabContent>
                <ModalFooter>
                    <Button color="secondary" onClick={() => this.props.closeEditDialog()}>ok</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        layouts: state.layouts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBackground: bindActionCreators(changeBackground, dispatch),
        setBackgroundVideo: bindActionCreators(setVideoToBackground, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditLayout);