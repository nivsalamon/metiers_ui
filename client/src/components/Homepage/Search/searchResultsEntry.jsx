import React from 'react';
import Checkbox from 'rc-checkbox';
import { Link } from 'react-router-dom';

class SearchResultsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.showDetails = this.showDetails.bind(this);
    this.saveOrDeleteJob = this.saveOrDeleteJob.bind(this);
  }

  componentWillMount() {
    this.props.dashboardLoad.map((job, i) => {
      if (job.job_title_name === this.props.job.title) {
        this.props.job.checkbox = 1;
      }
    });
  }


  showDetails() {
    this.props.showJobDetails(this.props.job);
  }

  saveOrDeleteJob() {
    console.log('this is job', this.props.job)
    if (this.props.job.checkbox === 0) {
      this.props.saveOrDeleteJob(this.props.job, true, 1);
      this.setState({
        checked: true,
      });
    } else {
      this.props.saveOrDeleteJob(this.props.job, false, 0);
      this.setState({
        checked : false,
      });
    }
  }

  render() {
    return (
      <div className="container push-top-sm">
        {this.props.job.company.location ? (
          <div>
            <Link to="/search/details" href="/search/details">
              <h3 onClick={this.showDetails}>
                {this.props.job.title}
              </h3>
            </Link>
            <h6>{this.props.job.company.name}</h6>
            <h6>{this.props.job.company.location.name}</h6>
            <h6>{this.props.job.company.url}</h6>
            <Checkbox checked={this.props.job.checkbox} onChange={this.saveOrDeleteJob} /><span>Save</span>
          </div>
        ): 
        <div>
          <Link to="/search/details" href="/search/details">
            <h3 onClick={this.showDetails}>
              {this.props.job.title}
            </h3>
          </Link>
          {}
          <h6>{this.props.job.company.name}</h6>
          <h6>{this.props.job.company.url}</h6>
          <Checkbox checked={this.props.job.checkbox} onChange={this.saveOrDeleteJob} />
        </div>
        }
      </div>
    );
  }
}

export default SearchResultsEntry;
