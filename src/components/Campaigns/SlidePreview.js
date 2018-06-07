import React from 'react';
import { Card } from 'reactstrap';
import Preview from '../ContentCreator/Editor/Preview';


class SlidePreview extends React.Component {


    render() {

        const slideToPreviewStyles = this.props.slide.layout.backgrounds.map(item => (
            { background: item.back }
        ));

        return (
            <Card className="card-default m-1 outer-16x9" >
                <div className='inner-16x9'>
                    <Preview id={this.props.slide.layout.id} customStyles={slideToPreviewStyles} />
                </div>
            </Card>
        )
    }
};

export default SlidePreview;