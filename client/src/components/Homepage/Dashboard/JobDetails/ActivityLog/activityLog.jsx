import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
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

  componentWillMount() {
    console.log('checking jobid', this.props.jobDetailsAdditional.job_id);
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
    console.log('this is job id', this.props.jobDetailsAdditional.job_id);
    const data = {      
      job_id: this.props.jobDetailsAdditional.job_id,
      notes: this.state.text,
      name: this.state.value, 
      type: this.state.option,
      timeStamp: this.state.date._d,
    }
    axios.post('http://localhost:3003/addHistory', data
    ).then(function(response) {
      axios.post('http://localhost:3003/historyLog', {
        job_id: context.props.jobDetailsAdditional.job_id
      }).then(function(response) {
        context.props.addActivityLog(response.data);
      })
    })
  }

  render() {
    return (
      <div className='container'>
        <h4>Date</h4>
        <DatePicker
          className="form-control"
          id="jobDeadlineSelect"
          selected={this.state.date}
          onChange={this.handleDateChange}
          dateFormat="LL"
        />
        <h4 className="push-top-sm">Title</h4>
        <div className="row">
          <div className="col-md-3">
            <input className="form-control" value={this.state.value} onChange={this.handleTitleChange}/>
          </div>
        </div>
        <h4 className="push-top-sm">Type</h4>
        <select value={this.state.option} onChange={this.handleTypeChange}>
          <option value='Phone Call'>Phone Call</option>
          <option value='Interview'>Interview</option>
          <option value='Coding Challenge'>Coding Challenge</option>
          <option value='Other'>Other</option>
        </select>
        <button className="btn btn-job-form push-left-sm  " onClick={this.addEvent}>Submit</button>
        <h4 className="push-top-sm">Activity Log</h4>
        <MuiThemeProvider>
          <ActivityLogTable header={this.header} job_id={this.props.jobDetailsAdditional.job_id} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ActivityLog;
