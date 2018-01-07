import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';


class CardsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails() {
    this.props.showJobDetails(this.props.job);
  }

  render() {

    const stars = [];
    const star = <i className="fa fa-star" aria-hidden="true"></i>;
    for(var i = 0; i < this.props.job.rating; i++) {stars.push(star);}

    return (
      <div className="card-wrapper">
        <div className="card-inner">
          <h6 className="job_company">{this.props.job.company_name}</h6>  
          <Link to="/home/job-detail" href="/home/job-detail" job={this.props.job}>
            <h6 className="job_title" onClick={this.showDetails}>{this.props.job.job_title_name}</h6>
          </Link>
          <a className="original_job_url" href={'http://' + this.props.job.url !== 'http://' ? 'http://' + this.props.job.url : ""} target="_blank">Job Application</a>
          
          <p className="personal_rating">Rating: {stars}
          </p>

          <p className="job_status">Status: {this.props.job.status}</p>
          <p className="job_deadline">Deadline: {<TimeAgo date={this.props.job.deadline} /> } </p>
          <div className="last_applied">
          <h6 className="last_applied_text">Created: {<TimeAgo date={this.props.job.created_date} /> }</h6>
          </div>
        </div>
      </div>
    );
  }
};

export default CardsEntry;