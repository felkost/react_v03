import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { removeCampaign, copyCampaign } from '../../actions/Campaigns/campaigns';
import { NavLink } from 'react-router-dom';
import SlidePreview from './SlidePreview';



class Campaigns extends React.Component {

    SlidesToPreview = (campaign) => {
        let attachedSlides = this.props.slides.filter(slide => campaign.slideIds.includes(slide.id));
        attachedSlides.sort((a, b) => (
            campaign.slideIds.indexOf(a.id) - campaign.slideIds.indexOf(b.id)
        ));
        return attachedSlides.map((slide, indx) => (
            <div className='col-xl-2' key={indx}>
                <SlidePreview slide={slide} />
            </div>
        ))
    };

    render() {

        const { campaigns, removeCampaign, copyCampaign } = this.props;

        return (
            <ContentWrapper>
                <div className="content-heading">Campaigns
                    <div className="ml-auto">
                        <NavLink to='/campaigns/new'>
                            <button className="btn btn-secondary btn-sm" type="button">Create Campaign</button>
                        </NavLink >
                    </div>
                </div>
                <Row>
                    {campaigns.map(item => (
                        <Col xl="4" lg="6" key={item.id}>
                            <div className="card card-default">
                                <div className="card-header">
                                    {item.isSplashScreen &&
                                        <div className="float-right">
                                            <div className="badge badge-success">splashscreen</div>
                                        </div>
                                    }
                                    <div className="card-title">{item.name}</div>
                                </div>
                                <div className="card-body bt">
                                    <div className="row">
                                        {this.SlidesToPreview(item)}
                                    </div>
                                </div>
                                <div className="card-body bb">
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <p className="text-bold">Gender</p>
                                            <div className="h3 m-0"> {item.genderId === 0 ? 'both' : item.genderId === 1 ? 'female' : 'male'} </div>
                                        </div>
                                        <div className="col-4">
                                            <p className="text-bold">Begin age</p>
                                            <div className="h3 m-0"> {item.begAge} </div>
                                        </div>
                                        <div className="col-4">
                                            <p className="text-bold">End age</p>
                                            <div className="h3 m-0"> {item.endAge} </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body bb">
                                    <div className="row text-center">
                                        <div className="col-6">
                                            <p className="text-bold">Begin date</p>
                                            <div className="h3 m-0"> {item.begDate} </div>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-bold">End date</p>
                                            <div className="h3 m-0"> {item.endDate} </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card-body bb">
                                    <div className="row">
                                        <div className="col-12">
                                            <a className="mr-1 badge badge-primary" href="">samsung</a>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="card-footer text-center">
                                    <NavLink to={`/campaigns/${item.id}`} ><button type="button" className="btn btn-secondary btn-oval">Edit</button></NavLink>
                                    <button onClick={() => copyCampaign(item)} type="button" className="btn btn-secondary btn-oval">Copy</button>
                                    <button onClick={() => removeCampaign(item.id)} type="button" className="btn btn-secondary btn-oval">Delete</button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </ContentWrapper>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    campaigns: state.campaigns,
    slides: state.slides
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeCampaign: id => dispatch(removeCampaign(id)),
    copyCampaign: item => dispatch(copyCampaign(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);
