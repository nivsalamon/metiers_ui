import React from 'react';
import { Link } from 'react-router-dom';

class StatusLinks extends React.Component {
  constructor() {
    super();
  }
   
  render() {
    return (
      <div className="container push-bottom">
        <div className="row">
          <div className="col-md-4">
            <div className="job-tab">
              <NavLink to="/home/will-apply" activeClassName="selected" href="/home/will-apply">Will Apply</NavLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-tab">
              <NavLink to="/home/applied" activeClassName="selected" href="/home/applied">Applied</NavLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-tab">
              <NavLink to="/home/follow-up" activeClassName="selected" href="/home/follow-up">Follow-Up</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default StatusLinks;
