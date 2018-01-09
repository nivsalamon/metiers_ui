import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import SearchResultsEntry from '../../../containers/Search/searchJobDetailActionContainer';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.saveJobs = this.saveJobs.bind(this);
    this.state = {
      searched: false,
    }
    this.getAllJobsForDashboard = this.getAllJobsForDashboard.bind(this);
  }

  componentWillMount() {
    this.setState({
      searched: false
    })
  }

  saveJobs() {
    if (this.props.savedSearchedJobs.length === 0) {
      return;
    }
    const context = this;
    axios.post('http://localhost:3003/company/search', {
      id: context.props.auth.user.id,
      jobs: context.props.savedSearchedJobs,
    }).then(function(response) {
      axios.post('http://localhost:3003/job/search', {
        id: context.props.auth.user.id,
        jobs: context.props.savedSearchedJobs
      }).then(function(response) {
        context.getAllJobsForDashboard();
        context.props.saveOrDeleteSearchedJobs({checked: "Refresh"}, [])
        context.setState({
          searched: true,
        })
      })
    });
  };

  getAllJobsForDashboard() {
    var context = this;
    axios.post(`http://localhost:3003/dashboard`, {
      id: this.props.auth.user.id,
    }).then((res) => {
      console.log('this is res.data', res.data)
      if (res.data.length === 0) {
        context.props.dashboardAction([]);
      } else {
        context.props.dashboardAction(res.data);
      }
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.searched === true ? (
          <Redirect to="/home" />
        ) :
        <div>
          <input type="text" value={this.props.value} onKeyPress={this.props.handleKeyPress} onChange={this.props.handleChange} className="search-input" placeholder="Search" />
          <button className="btn btn-job-form push-left-sm" onClick={this.props.clicked}>Search For Jobs</button>
          <button className="btn btn-job-form push-left-sm" onClick={this.saveJobs}>Submit</button>
        <div className="push-top">
          <div>
            {this.props.error === true ? (
              <h6 className='center'>Could not find anything</h6>
            ) :
              <div>
                <h6>An already saved job will have a checkmark pre-checked.<br/> Uncheck and submit that job if you'd like to remove it.</h6>
                <div>
                  {this.props.searchResults.map((job, i) => (
                    <SearchResultsEntry job={job} key={i} saveOrDeleteJob={this.props.saveOrDeleteJob}/>
                  ))}
                </div> 
              </div>
            }
          </div>
        </div>
      </div>
      
      }
      </div>
    )
  }
}


export default SearchResults;