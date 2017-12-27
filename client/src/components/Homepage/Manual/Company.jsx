import React from 'react';

const company = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="companyNameInput"
              placeholder="Name"
              name="companyName"
              value={props.company.name}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="companyPhoneInput"
              placeholder="Phone Number"
              name="companyPhone"
              value={props.company.phone}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>Address 1</label>
        <input
          type="text"
          className="form-control"
          id="companyAddress1Input"
          placeholder="Address 1"
          name="companyAddress1"
          value={props.company.address1}
          onChange={props.handleUserInput}
        />
      </div>
      <div className="form-group">
        <label>Address 2</label>
        <input
          type="text"
          className="form-control"
          id="companyAddress2Input"
          placeholder="Address 2"
          name="companyAddress2"
          value={props.company.address2}
          onChange={props.handleUserInput}
        />
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              id="companyCityInput"
              placeholder="City"
              name="companyCity"
              value={props.company.city}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>State</label>
            <select
              className="form-control"
              id="companyStateSelect"
              name="companyState"
              onChange={props.handleUserInput}
            >
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>ZIP Code</label>
            <input
              type="text"
              className="form-control"
              id="companyZipInput"
              placeholder="ZIP Code"
              name="companyZip"
              value={props.company.zip}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
      </div>
      <div className="form-group text-area">
        <label>Description</label>
        <textarea
          className="form-control"
          id="notesInput"
          rows="3"
          placeholder="Company description"
          name="companyDescription"
          value={props.company.description}
          onChange={props.handleUserInput}
        />
      </div>
    </div>
  );
};

export default company;
