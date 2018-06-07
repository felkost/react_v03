import React from "react";
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import LayoutPanel from './LayoutPanel';


const Layout = ({ layouts }) => {
    switch (layouts[0].activeId) {
        case 1:
            return <Row className='m-0 h-100' >
                <Col xs={12} key={1} className='p-0'>
                    <LayoutPanel indx={0} />
                </Col>
            </Row>;

        case 2:
            return <Row className='m-0 h-100' >
                <Col xs={6} key={1} className='p-0'>
                    <LayoutPanel indx={0} />
                </Col>
                <Col xs={6} key={2} className='p-0'>
                    <LayoutPanel indx={1} />
                </Col>
            </Row>;

        case 3:
            return <Row className='m-0 h-100' >
                <Col xs={4} key={1} className='p-0'>
                    <LayoutPanel indx={0} />
                </Col>
                <Col xs={4} key={2} className='p-0'>
                    <LayoutPanel indx={1} />
                </Col>
                <Col xs={4} key={3} className='p-0'>
                    <LayoutPanel indx={2} />
                </Col>
            </Row>;

        case 4:
            return <Row className='m-0 h-100' >
                <Col xs={6} key={1} className='p-0'>
                    <Row style={{ height: '40%', margin: 0 }} >
                        <LayoutPanel indx={0} />
                    </Row>
                    <Row style={{ height: '60%', margin: 0 }} >
                        <LayoutPanel indx={1} />
                    </Row>
                </Col>
                <Col xs={6} key={2} className='p-0'>
                    <Row style={{ height: '60%', margin: 0 }} >
                        <LayoutPanel indx={2} />
                    </Row>
                    <Row style={{ height: '40%', margin: 0 }} >
                        <LayoutPanel indx={3} />
                    </Row>
                </Col>
            </Row>

        default:
            return <Row className='m-0 h-100' >
                <Col xl={12} key={1} className='p-0'>
                    <LayoutPanel indx={1} />
                </Col>
            </Row>;
    }
}


const mapStateToProps = (state, ownProps) => ({
    layouts: state.layouts,
})
export default connect(mapStateToProps)(Layout);
