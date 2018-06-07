import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card } from 'reactstrap';
import Editor from './Editor/Editor';
import Toolbar from './Toolbar/Toolbar';

const classes = {
    left: {        
        height: 0,
        overflow: 'hidden',
        paddingTop: '56.25%',
        position: 'relative',
    },
    right: {
        height: '100%',
    },
}

const ContentCreator = () => {
    return (
        <ContentWrapper>
            <Row>
                <Col lg={10} md={8} sm={12}>
                    <Card className="card-default mb-3" style={classes.left}>
                        <Editor />
                    </Card>
                </Col>

                <Col lg={2} md={4} sm={12}>
                    <Card className="card-default mb-3" style={classes.right}>
                        <Toolbar />
                    </Card>
                </Col>
            </Row>
        </ContentWrapper>
    );

}

export default ContentCreator;
