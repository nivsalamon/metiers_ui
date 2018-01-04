import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import SearchResultsEntry from './searchResultsEntry'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.saveJobs = this.saveJobs.bind(this);
    this.state = {
      searched: false,
    }
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
    axios.post(`${auth.serverUrl}/company/search`, {
      jobs: context.props.savedSearchedJobs
    }).then(function(response) {
      console.log('this is respnose', response);
      axios.post(`${auth.serverUrl}/job/search`, {
        jobs: context.props.savedSearchedJobs
      }).then(function(response) {
        console.log('this is response 2', response);
        context.props.saveOrDeleteSearchedJobs({checked: "Refresh"}, [])
        context.setState({
          searched: true,
        })
      })
    });
  };

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
                {this.props.searchResults.map((job, i) => (
                  <SearchResultsEntry job={job} key={i} saveOrDeleteJob={this.props.saveOrDeleteJob}/>
                ))}
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