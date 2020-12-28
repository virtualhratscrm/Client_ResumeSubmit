import React, { Component } from "react";
import "./ResumeForm.css";

var jobTypes = document.getElementsByClassName(".jobtype");

console.log("test");

function validateJobTypeChecked() {
  var sucess = false;

  for (let i = 0; i < jobTypes.length; i++) {
    if (sucess) {
    }
  }
}

export default class ResumeSubmitForm extends Component {
  render() {
    return (
      <div>
        <div className="topTitle">
          <img
            className="topLogo"
            src="img/horizontal_on_white.jpeg"
            alt="Virtual HR Co LOGO"
          ></img>
        </div>
        <div className="forminfobox">
          <h2>Job Interest Form </h2>
          <p>
            We know that finding a meaningful and rewarding job can be a long
            journey and daunting. Our goal is to make that process as easy as
            possible for you. Virtual HR &amp; Company PARTNERS with local
            businesses to help hire local talents for vacant positions - direct
            hire only.
          </p>
          <p>
            VHRC is NOT a STAFFING company, candidates will be hired directly by
            local companies and offered benefits right away (based on companies
            waiting period).
          </p>
          <p>* Required</p>
        </div>
        <form>
          <div className="forminfobox">
            <label htmlFor="email">Email address * </label>
            <div></div>
            <input
              aria-required="true"
              type="email"
              id="email"
              name="email"
              required={true}
              placeholder="email address"
            />
          </div>
          <div className="forminfobox">
            <label htmlFor="fname">First name: *</label>
            <div></div>
            <input
              aria-required="true"
              type="text"
              id="fname"
              name="fname"
              required={true}
              placeholder="First Name"
            />
          </div>
          <div className="forminfobox">
            <label htmlFor="lname">Last name: *</label>
            <div></div>
            <input
              aria-required="true"
              type="text"
              id="lname"
              name="lname"
              required={true}
              placeholder="Last Name"
            />
          </div>
          <div className="forminfobox">
            <label htmlFor="phone">Phone number *:</label>
            <div></div>
            <input
              aria-required="true"
              type="text"
              id="phone"
              name="phone"
              required={true}
              placeholder="Phone Number"
            />
          </div>
          <div className="forminfobox">
            <h3>Address *</h3>
            <div></div>
            <label htmlFor="addressLine1">Address Line 1 *:</label>
            <div></div>
            <input
              aria-required="true"
              type="text"
              id="addressLine1"
              name="addressLine1"
              required={true}
              placeholder=" Number Street Name"
            />
            <div></div>
            <label htmlFor="addressLine2">Address Line 2 :</label>
            <div></div>
            <input
              aria-required="false"
              type="text"
              id="addressLine2"
              name="addressLine2"
              placeholder="Apt or Suite Number "
            />
            <div></div>
            <label htmlFor="city">City *:</label>
            <div></div>
            <input
              aria-required="true"
              type="text"
              id="city"
              name="city"
              required={true}
              placeholder=" city"
            />
            <div></div>
            <label htmlFor="state">State *:</label>
            <div></div>
            <select name="state" required={true}>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL" selected>Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            {/* <input
              aria-required="true"
              type="text"
              id="state"
              name="state"
              required={true}
              placeholder=" full state name"
            /> */}
            <div></div>
            <label htmlFor="zipcode"> Zip Code *:</label>
            <div></div>
            <input
              aria-required="true"
              type="text"
              id="zipcode"
              name="zipcode"
              required={true}
              placeholder=" zip code"
            />
          </div>
          <div className="forminfocheckbox">
            <h3>Which position(s) are you interested in? *</h3>
            <div className="formArea">
              <input
                className="jobtype"
                type="checkbox"
                name="position1"
                value="Line Cook"
              />
              <label htmlFor="position1"> Line Cook</label>
              <div></div>
              <input
                className="jobtype"
                type="checkbox"
                name="position2"
                value="Server"
              />
              <label htmlFor="position2"> Server</label>
              <div></div>
              <input
                type="checkbox"
                className="jobtype"
                name="position3"
                value="Server Assistant"
              />
              <label htmlFor="position3"> Server Assistant</label>
              <div></div>
              <input
                type="checkbox"
                className="jobtype"
                name="position4"
                value="Food Runner"
              />
              <label htmlFor="position4"> Food Runner</label>
              <div></div>
              <input
                type="checkbox"
                className="jobtype"
                name="position5"
                value="Take Out Attendant"
              />
              <label htmlFor="position5"> Take Out Attendant</label>
              <div></div>
              <input
                type="checkbox"
                className="jobtype"
                name="position6"
                value="Don't see what you need? Submit your resume anyways for future opportunities"
              />
              <label htmlFor="position6">
                {" "}
                Don't see what you need? Submit your resume anyways for future
                opportunities
              </label>
            </div>
          </div>
          <div className="forminfobox">
            <h3>
              Copy and paste your resume for consideration (please format it). *
            </h3>
            <textarea
              className="resumeBox"
              aria-required="true"
              id="resume"
              name="resume"
              required={true}
              placeholder="Resume Here"
            />
          </div>{" "}
          <div className="forminfobox">
            <h3>Are you legally authorized to work in the United States? *</h3>
            <div className="formArea">
              <input
                className="authCheck"
                type="checkbox"
                name="authorizedTrue"
                value="authorizedTrue"
              />
              <label htmlFor="authorizedTrue"> Yes </label>
              <div></div>
              <input
                className="authCheck"
                type="checkbox"
                name="authorizedFalse"
                value="authorizedFalse"
              />
              <label htmlFor="authorizedFalse"> No </label>
            </div>
          </div>
          <div className="forminfobox">
            <h3>*</h3>
            <p>Date</p>
            <input
              aria-label="today's date"
              aria-required="true"
              type="date"
              required={true}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            class="submitButton"
            id="resumeSubmitButton"
          />{" "}
        </form>
      </div>
    );
  }
}



/// highest ed level
/// years experience  0-4 or 5+ - info coming
// schedule requrements / avaliabuility - mon-sun am/pm
// salary requirements



// hold for now

// visa sponsorship question ?

// prior conviction clause
// check box yes / no
// explain field
