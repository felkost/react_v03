import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';


const STATES = [
    { value: 'samsung1', label: 'samsung1' },
    { value: 'samsung2', label: 'samsung2' },
    { value: 'samsung3', label: 'samsung3' },
    { value: 'samsung4', label: 'samsung4' },
    { value: 'samsung5', label: 'samsung5' },
    { value: 'samsung6', label: 'samsung6' }
]

class Analitics extends React.Component {

    state = {
        devices: [],
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        },
    }

    handleChangeDevices = (devices) => {
        this.setState({ devices });
    }

    handleApply = (event, picker) => {
        this.setState({
            startDate: picker.startDate,
            endDate: picker.endDate,
        });
    }

    render() {

        let start = this.state.startDate.format('DD.MM.YYYY');
        let end = this.state.endDate.format('DD.MM.YYYY');
        let label = start + ' - ' + end;
        if (start === end) {
            label = start;
        }

        return (
            <ContentWrapper>
                <Row>
                    <Col lg="12">
                        <Card className="card-default mb-3 p-3">
                            <Row>
                                <div className="col-md-6 col-sm-12 form-group mb-3 ">
                                    <label>Devices:</label>
                                    <Select
                                        name="devices"
                                        multi
                                        simpleValue
                                        value={this.state.devices}
                                        onChange={this.handleChangeDevices}
                                        options={STATES}
                                    />
                                </div>
                                <div className="col-md-6 col-sm-12 form-group mb-3 ">
                                    <label>Period:</label>
                                    <DateRangePicker
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        ranges={this.state.ranges}
                                        onApply={this.handleApply}
                                        containerClass='col-md-12 p-0'
                                    >
                                        <input type="text" className="form-control" onChange={() => {}} value={label} />
                                    </DateRangePicker>
                                </div>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Analitics);
