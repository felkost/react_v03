import React, { Component } from "react";
import { Row, Col } from 'reactstrap';

export default class Preview extends Component {

    render() {

        const { id, customStyles } = this.props;

        switch (id) {
            case 1:
                return (
                    <Row className='m-0 h-w-100' >
                        <Col className='p-0 h-100' xs={12} key={1} style={customStyles[0]}>
                        </Col>
                    </Row>
                );
            case 2:
                return (
                    <Row className='m-0 h-w-100' >
                        <Col className='p-0 h-100' xs={6} key={1} style={customStyles[0]}>
                        </Col>
                        <Col className='p-0 h-100' xs={6} key={2} style={customStyles[1]}>
                        </Col>
                    </Row>
                );
            case 3:
                return (
                    <Row className='m-0 h-w-100' >
                        <Col className='p-0 h-100' xs={4} key={1} style={customStyles[0]}>
                        </Col>
                        <Col className='p-0 h-100' xs={4} key={2} style={customStyles[1]}>
                        </Col>
                        <Col className='p-0 h-100' xs={4} key={3} style={customStyles[2]}>
                        </Col>
                    </Row>
                );
            case 4:
                return (
                    <Row className='m-0 h-w-100' >
                        <Col className='p-0' xs={6} key={1} >
                            <Col className='p-0 m-0 w-100 h-40' style={customStyles[0]} >
                            </Col>
                            <Col className='p-0 m-0 w-100 h-60' style={customStyles[1]} >
                            </Col>
                        </Col>
                        <Col className='p-0' xs={6} key={2} >
                            <Col className='p-0 m-0 w-100 h-60' style={customStyles[2]} >
                            </Col>
                            <Col className='p-0 m-0 w-100 h-40' style={customStyles[3]} >
                            </Col>
                        </Col>
                    </Row>
                );
            default:
                return (<div>-</div>);
        }
    }
}