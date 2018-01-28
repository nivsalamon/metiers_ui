import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import config from '../../../../../../../config';
import moment from 'moment';
import axios from 'axios';
import ActivityLogTable from '../../../../../containers/JobDetails/activityLogTableContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ActivityLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      value: '',
      option: 'Phone Call',
      reset: true,
    };

    this.header = [
      {
        name: 'Activity Title',
      }, {
        name: 'Time',
      }, {
        name: 'Date',
      },
    ];
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  handleDateChange (date) {
    this.setState({
      date: date
    })
  }

  handleTitleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleTypeChange (event) {
    this.setState({
      option: event.target.value
    })
  }

  addEvent() {
    const context = this;
    const data = {      
      job_id: this.props.jobDetailsAdditional.job_id,
      notes: this.state.text,
      name: this.state.value, 
      type: this.state.option,
      timeStamp: this.state.date._d,
    }
    axios.post(`http://${config.server}:${config.port}/addHistory`, data
    ).then(function(response) {
      axios.post(`http://${config.server}:${config.port}/historyLog`, {
        job_id: context.props.jobDetailsAdditional.job_id
      }).then(function(response) {
        context.props.addActivityLog(response.data);
      })
    })
  }

  render() {
    return (
      <div className='container push-top'>
        <div className="offset-md-1 col-md-10 offset-md-1">
        <h3>Activity Log</h3>
        <label className="activity-log-label">Date</label>
        <DatePicker
          className="form-control"
          id="jobDeadlineSelect"
          selected={this.state.date}
          onChange={this.handleDateChange}
          dateFormat="LL"
        />
        <label className="activity-log-label">Title</label>
        <div className="row">
          <div className="col-md-3">
            <input className="form-control" placeholder="Title" value={this.state.value} onChange={this.handleTitleChange}/>
          </div>
        </div>
        <label className="activity-log-label activity-log-type">Type</label>
        <select value={this.state.option} onChange={this.handleTypeChange} className="form-control activity-log-dropdown">
          <option value='Phone Call'>Phone Call</option>
          <option value='Interview'>Interview</option>
          <option value='Coding Challenge'>Coding Challenge</option>
          <option value='Other'>Other</option>
        </select>
        <button className="btn btn-job-form push-left-sm " onClick={this.addEvent}>Submit</button>
        <MuiThemeProvider>
          <ActivityLogTable header={this.header} job_id={this.props.jobDetailsAdditional.job_id} />
        </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default ActivityLog;
