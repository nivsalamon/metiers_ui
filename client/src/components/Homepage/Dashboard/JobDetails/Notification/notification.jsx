import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Link, Switch, Route } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import './notification.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NotificationDateTime: moment(),
      NotificationMessage: "",
      NotificationName: "",
      appcheckbox: false,
      emailcheckbox: false,
      jobId: this.props.jobId
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAddNotifications = this.handleAddNotifications.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
    console.log('STATE: ', this.state)
  }

  handleDateChange(e) {
    this.setState({
      NotificationDateTime: e,
    });
    console.log('STATE: ', this.state)
  }

  handleAddNotifications(){
    axios.post('http://localhost:3003/addNotification', {
      jobId: this.props.jobId,
        NotificationDateTime: this.state.NotificationDateTime,
        NotificationMessage: this.state.NotificationMessage,
        NotificationName: this.state.NotificationName
      }).then((res) => {
        console.log('res', res);
      });
  }


  render() {
    return (
      
    <div>
      <div className="container push-top">
        <div className="row">
          <div className="offset-md-1 col-md-10 offset-md-1">
            <h3>Add a Notification</h3>
            <label>Notification Date &amp; Time</label> <span className="must-have">*</span>
            
            <DatePicker
              className="form-control date_time_picker"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              selected={this.state.NotificationDateTime}
              dateFormat="LLL"
              onChange={this.handleDateChange}
            />
          </div> 
        </div>
        <div className="row">

          <div className="offset-md-1 col-md-10 offset-md-1 push-top-sm">
            <label>Notification Title</label> <span className="must-have">*</span>
            <textarea className="form-control" name="NotificationName" placeholder="Title" onChange={this.handleUserInput}></textarea>
          </div>
          <div className="offset-md-1 col-md-10 offset-md-1 push-top-sm">
            <label>Notification Message</label> <span className="must-have">*</span>
            <textarea className="form-control" name="NotificationMessage" placeholder="Message" onChange={this.handleUserInput}></textarea>
          </div>
          <div className="offset-md-1 col-md-10 offset-md-1 push-top-sm">
            <button className="btn btn-primary" onClick={this.handleAddNotifications}>Save</button>
            <button className="btn btn-secondary" onClick={this.props.toggleNotification}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Notification;