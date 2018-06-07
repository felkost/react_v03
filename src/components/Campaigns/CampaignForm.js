import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardBody, CardHeader, Input, FormGroup, Button } from 'reactstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { updateCampaign, createCampaign } from '../../actions/Campaigns/campaigns';
import DragSortableList from 'react-drag-sortable';
import SlidePreview from './SlidePreview';

const STATES = [
    { value: 'samsung1', label: 'samsung1' },
    { value: 'samsung2', label: 'samsung2' },
    { value: 'samsung3', label: 'samsung3' },
    { value: 'samsung4', label: 'samsung4' },
    { value: 'samsung5', label: 'samsung5' },
    { value: 'samsung6', label: 'samsung6' }
]

class CampaignForm extends React.Component {

    state = {
        item: this.props.item ? this.props.item : {
            name: '',
            begAge: '',
            endAge: '',
            genderId: 0,
            begDate: '',
            endDate: '',
            isSplashScreen: false,
            slideIds: [],
            devices:[]
        },
        formSubmitted: false, // Redirect to index if form is submit.
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            item: nextProps.item
        });
    }

    handleChange = (e) => {
        let field = e.target.name;
        let item = this.state.item;
        item[field] = e.target.value;
        this.setState({ item: item });
    }

    handleChangeDevices = (devices) => {
        let item = this.state.item;
        item.devices = devices;
        this.setState({ item: item });
    }

    handleChangeBegDate = (moment) => {
        if (moment._isValid) {
            let item = this.state.item;
            item.begDate = moment.format('MM-YYYY');
            this.setState({ item: item });
        }
    }

    handleChangeEndDate = (moment) => {
        if (moment._isValid) {
            let item = this.state.item;
            item.endDate = moment.format('MM-YYYY');
            this.setState({ item: item });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { item } = this.state;
        this.props.match.params.itemId ? this.props.updateCampaign(item) : this.props.createCampaign(item);
        this.setState({ formSubmitted: true });
    }

    onSort = (sortedList) => {
        let item = this.state.item;
        item.slideIds = sortedList.map(item => item.content.props.slide.id);
        this.setState({ item: item });
    }

    SlidesToPreview = () => {
        let ids = this.state.item.slideIds;
        let attachedSlides = this.props.slides.filter(slide => this.state.item.slideIds.includes(slide.id));
        attachedSlides.sort((a, b) => ( ids.indexOf(a.id) - ids.indexOf(b.id) ));
        return attachedSlides.map(slide => (
            { content: (<div slide={slide} ><SlidePreview slide={slide} /><em className="fa fa-times removeButton text-danger" onClick={() => this.removeSlideFromCampaign(slide)}></em></div>), classes: ['col-lg-2'] }
        ))
    }

    addSlideToCampaign = (slide) => {
        let item = this.state.item;
        if (!item.slideIds.includes(slide.id)) {
            item.slideIds = [...item.slideIds, slide.id];
        }
        this.setState({ item: item });
    }

    removeSlideFromCampaign = (slide) => {
        let item = this.state.item;
        item.slideIds = item.slideIds.filter(id => id !== slide.id);
        this.setState({ item: item });
    }

    render() {

        if (this.state.formSubmitted) {
            return (
                <Redirect to="/campaigns" />
            )
        }

        return (
            <ContentWrapper>
                <Row>
                    <Col xl="4" lg="6">
                        <Card className="card-default">
                            <CardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <label>Name</label>
                                        <Input name="name" value={this.state.item.name} onChange={this.handleChange}
                                            className="form-control-rounded" type="text" placeholder="Enter title" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Devices</label>
                                        <Select className="form-control-rounded"
                                            name="devices"
                                            multi
                                            simpleValue
                                            value={this.state.item.devices}
                                            onChange={this.handleChangeDevices}
                                            options={STATES}
                                        />
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col lg="6">
                                            <label>Begin Date</label>
                                            <Datetime name="begDate" value={this.state.item.begDate} onChange={this.handleChangeBegDate}
                                                dateFormat="YYYY-MM" timeFormat={false} inputProps={{ className: 'form-control form-control-rounded' }} />
                                        </Col>
                                        <Col lg="6">
                                            <label>End Date</label>
                                            <Datetime name="endDate" value={this.state.item.endDate} onChange={this.handleChangeEndDate}
                                                dateFormat="YYYY-MM" timeFormat={false} inputProps={{ className: 'form-control form-control-rounded' }} />
                                        </Col>
                                    </FormGroup>
                                    <hr />
                                    <FormGroup>
                                        <label>Gender</label>
                                        <select name="genderId" value={this.state.item.genderId} onChange={this.handleChange}
                                            className="custom-select form-control-rounded">
                                            <option value={0}>Both</option>
                                            <option value={1}>Female</option>
                                            <option value={2}>Male</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Begin Age</label>
                                        <Input name="begAge" value={this.state.item.begAge} onChange={this.handleChange}
                                            className="form-control-rounded" type="number" placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>End Age</label>
                                        <Input name="endAge" value={this.state.item.endAge} onChange={this.handleChange}
                                            className="form-control-rounded" type="number" placeholder="" />
                                    </FormGroup>
                                    <hr />
                                    <FormGroup>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked={this.state.item.isSplashScreen} />
                                                <span className="fa fa-check"></span>Set to Splash Screen
                                            </label>
                                        </div>
                                    </FormGroup>
                                    <Button type="submit" color="primary" size="lg">Save</Button>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="8" lg="6">
                        <Card className="card-default mb-4">
                            <CardHeader>
                                <p>Drag to change the queue</p>
                                <b>Attached Slides:</b>
                            </CardHeader>
                            <CardBody>
                                <DragSortableList placeholder={(<div className='drag-placeholder'></div>)} dropBackTransitionDuration={0.3} type="grid"
                                    onSort={this.onSort}
                                    // items={this.props.attachedSlides.map(slide => (
                                    //     { content: (<SlidePreview slide={slide} />) }
                                    // ))}
                                    items={this.SlidesToPreview()}
                                />
                            </CardBody>
                        </Card>
                        <Card className="card-default">
                            <CardHeader>
                                Click at slide to add it to campaign.
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    {this.props.slides.map((slide, indx) => (
                                        <div className='col-xl-2' key={indx} onClick={() => this.addSlideToCampaign(slide)}>
                                            <SlidePreview slide={slide} />
                                        </div>
                                    ))}
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}



const mapStateToProps = (state, ownProps) => (    {
        // if it has itemId - get item for editing, if not - create new item.
        item: ownProps.match.params.itemId ? state.campaigns.find(item => item.id === ownProps.match.params.itemId) : null,
        slides: state.slides
    }
);

const mapDispatchToProps = (dispatch) => ({
    updateCampaign: item => dispatch(updateCampaign(item)),
    createCampaign: item => dispatch(createCampaign(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm);
