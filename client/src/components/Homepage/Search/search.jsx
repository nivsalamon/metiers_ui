import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Ripple from './Ripple.svg';
import SearchJobDetails from './searchJobDetails';
import SearchResults from './searchResults';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      redirect: false,
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.toggle === false ?
          (
            <Switch>
              <Route exact path="/search" render={(props) => <SearchResults />} />
              <Route exact path="/search/details" render={(props) => <SearchJobDetails />} />
            </Switch>
          ) :
            <div className="center">
              <Ripple />
              {this.state.redirect === true ? (<Redirect to="/search/" />) : null}
            </div>
          }
        </div>
      </div>
    );
  }
}


export default Search;
