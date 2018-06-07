import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'reactstrap';
import { changeLayout } from '../../../actions/ContentCreator/layouts';
import Preview from '../Editor/Preview';

const styles = {
    prvimg: [{
        background: "url('/img/preview.svg') 100% 100%/cover no-repeat",
        border: '3px #fff solid',
    }, {
        background: "url('/img/preview.svg') 100% 100%/cover no-repeat",
        border: '3px #fff solid',
    }, {
        background: "url('/img/preview.svg') 100% 100%/cover no-repeat",
        border: '3px #fff solid',
    }, {
        background: "url('/img/preview.svg') 100% 100%/cover no-repeat",
        border: '3px #fff solid',
    }],
    cursor: {
        cursor: 'pointer'
    }
};

class LayoutPreview extends Component {
    render() {

        const { changeLayout } = this.props;

        return (
            <Row>
                {[1, 2, 3, 4].map(item => (
                    <Col xl={12} key={item} >
                        <Card className={"card-default mb-4 outer-16x9" + (item === this.props.layouts[0].activeId ? ' shadow-lg' : '')}
                            style={styles.cursor}
                            onClick={() => changeLayout(item)}>
                            <div className='inner-16x9'>
                                <Preview id={item} customStyles={styles.prvimg} />
                            </div>

                        </Card>
                    </Col>
                ))}
            </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(LayoutPreview);