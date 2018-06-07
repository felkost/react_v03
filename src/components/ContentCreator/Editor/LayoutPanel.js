import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLayout } from '../../../actions/ContentCreator/layouts';
import ModalBackrgound from './ModalBackrgound';
import VideoPlayer from 'react-background-video-player';


class Layout extends Component {

	state = {
		editable: false,
		editMode: false,
	};

	EditableOn = () => {
		this.setState({ editable: true });
	};

	EditableOff = () => {
		this.setState({ editable: false });
	};

	handleEditClick = () => {
		this.setState({ editMode: true });
	};

	closeEditDialog = () => {
		this.setState({ editMode: false });
	};

	render() {

		const { layouts, indx } = this.props;

		return (
			<div
				style={{
					position: 'relative', height: '100%', width: '100%',
					background: layouts[layouts[0].activeId].backgrounds[this.props.indx].back
				}}
				onMouseEnter={this.EditableOn}
				onMouseLeave={this.EditableOff}
			>

				{layouts[layouts[0].activeId].backgrounds[this.props.indx].video && (
					<div>
						<VideoPlayer
							src={layouts[layouts[0].activeId].backgrounds[this.props.indx].video}
							containerWidth={100} containerHeight={100} // - are requared
						/>
					</div>
				)}

				
				{this.state.editable && (
					<em className="fa fa-edit fa-3x editButton" onClick={this.handleEditClick}></em>
				)}

				<ModalBackrgound
					layoutId={indx}
					editMode={this.state.editMode}
					closeEditDialog={this.closeEditDialog}

				/>

			</div>
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
		changeLayout: bindActionCreators(changeLayout, dispatch),
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);