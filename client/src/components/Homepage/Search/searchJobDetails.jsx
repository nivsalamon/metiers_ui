import React from 'react';
import Checkbox from 'rc-checkbox';
import { Link } from 'react-router-dom';

class searchJobDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.saveOrDeleteJob = this.saveOrDeleteJob.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0)
  };

  saveOrDeleteJob() {
    if (this.props.jobDetails.checkbox === 0 || this.props.jobDetails.checkbox === undefined) {
      this.props.saveOrDeleteJob(this.props.jobDetails, true, 1);
      this.setState({
        checked: true
      })
    } else {
      this.props.saveOrDeleteJob(this.props.jobDetails, false, 0);
      this.setState({
        checked : false
      })
    }
  }


  render() {
    return (
      <div>
        <input type="text" value={this.props.value} onChange={this.props.handleChange} onKeyPress={this.props.handleKeyPressDetails}/>
        <Link to="/search" href="/search">
          <button onClick={this.props.clicked}>Click this to test github api</button>
        </Link>
        <Link to="/search" href="/search">Back to Results</Link>
        <Checkbox  checked={this.props.jobDetails.checkbox === undefined ? (0) : this.props.jobDetails.checkbox} onChange={this.saveOrDeleteJob} />
        <div>
          <h1>{this.props.jobDetails.title}</h1>
          <h4>{this.props.jobDetails.company.name}</h4>
          <h4>{this.props.jobDetails.company.url}</h4>
          {this.props.jobDetails.company.location === undefined ? (
            <div></div>
          ) :
            <h4>{this.props.jobDetails.company.location.name}</h4>
          }
          <h4>{this.props.jobDetails.description.replace(/<(?:.|\n)*?>/gm, '')}</h4>
          <h4>Apply Here: {this.props.jobDetails.apply_url}</h4>
        </div>
      </div>
    )
  }

}
export default searchJobDetails;
