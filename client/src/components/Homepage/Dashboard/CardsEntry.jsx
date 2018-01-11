import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import moment from 'moment';

class CardsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
    this.checkTimeForUTC = this.checkTimeForUTC.bind(this);
    this.state = {
      currdate: '',
    }
  }

  componentDidMount(){
    this.checkTimeForUTC();
  }

  checkTimeForUTC() {
    var today = new Date();
    var tempDate = '';
    var tempMonth = '';

    if(today.getDate() < 10){
      tempDate = ('0' + today.getDate()).toString();
    } else {
      tempDate = today.getDate().toString();
    }

    if(today.getMonth()+1 < 10){
      tempMonth = ('0' + (today.getMonth()+1)).toString();
    } else {
      tempDate = today.getMonth().toString();
    }

    if (today.getHours() >= 16) {
      var temp = today.getFullYear().toString() + '-' + tempMonth + '-' + tempDate;
      this.setState({currdate:temp});
    } else {
      var temp = today.getFullYear().toString() + '-' + tempMonth + '-' + tempDate;
      this.setState({currdate:temp});
    }

  }

  showDetails() {
    this.props.showJobDetails(this.props.job);
  }

  render() {
    const stars = [];
    for(var i = 0; i < this.props.job.rating; i++) {
      stars.push(<i className="fa fa-star" aria-hidden="true" key={i}></i>);
    }

    return (
      <div className="card-wrapper">
        <div className="card-inner">
          <h6 className="job_company">{this.props.job.company_name}</h6>  
          <Link to="/home/job-detail" href="/home/job-detail" job={this.props.job}>
            <h6 className="job_title" onClick={this.showDetails}>{this.props.job.job_title_name}</h6>
          </Link>
          <a className="original_job_url" href={'http://' + this.props.job.url !== 'http://' ? 'http://' + this.props.job.url : ""} target="_blank">Job Application</a>
          
          <p className="personal_rating">Ranking: {stars}
          </p>

          <p className="job_status">Status: {this.props.job.status}</p>
          {/* <p className="job_deadline">Deadline: {<TimeAgo date={this.props.job.deadline} /> } </p> */}
          {/* <div>ONE{this.state.currdate}</div>
          <div>job.created_date {this.props.job.created_date.split('T')[0]}</div> */}
          <div className="last_applied">
          <h6 className="last_applied_text">Created: { this.state.currdate == this.props.job.created_date.split('T')[0] ? 'Today' : <TimeAgo date={this.props.job.created_date} />}</h6>
          </div>
        </div>
      </div>
    );
  }
};

export default CardsEntry;