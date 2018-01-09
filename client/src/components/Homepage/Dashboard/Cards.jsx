import React from 'react';
import CardsEntry from '../../../containers/cardsEntryActionContainer';
import { NavLink, Link, Switch, Route, Redirect } from 'react-router-dom';

const Cards = (props) => {

  return (
    <div>
    <div className="container push-bottom-sm push-top status-headers-wrapper">
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
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          {props.dashboardLoad.map((job) => {
            if (job.status === 'Will Apply') {
              return (
                <CardsEntry key={job.id} job={job}/>
              );
            }
          })}
        </div>
        <div className="col-md-4">
          {props.dashboardLoad.map((job) => {
            if (job.status === 'Applied') {
              return (
                <CardsEntry key={job.id} job={job}/>
              );
            }
          })}
        </div>
        <div className="col-md-4">
          {props.dashboardLoad.map((job) => {
            if (job.status == 'Follow Up') {
              return (
                <CardsEntry key={job.id} job={job}/>
              );
            }
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;