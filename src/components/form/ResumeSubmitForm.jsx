import React, { Component } from "react";
import "./ResumeForm.css";

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
            <input
              aria-required="true"
              type="text"
              id="state"
              name="state"
              required={true}
              placeholder=" full state name"
            />
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
                className="check"
                type="checkbox"
                name="position1"
                value="Line Cook"
              />
              <label htmlFor="position1"> Line Cook</label>
              <div></div>
              <input
                className="check"
                type="checkbox"
                name="position2"
                value="Server"
              />
              <label htmlFor="position2"> Server</label>
              <div></div>
              <input
                type="checkbox"
                className="check"
                name="position3"
                value="Server Assistant"
              />
              <label htmlFor="position3"> Server Assistant</label>
              <div></div>
              <input
                type="checkbox"
                className="check"
                name="position4"
                value="Food Runner"
              />
              <label htmlFor="position4"> Food Runner</label>
              <div></div>
              <input
                type="checkbox"
                className="check"
                name="position5"
                value="Take Out Attendant"
              />
              <label htmlFor="position5"> Take Out Attendant</label>
              <div></div>
              <input
                type="checkbox"
                className="check"
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
                className="check"
                type="checkbox"
                name="authorizedTrue"
                value="authorizedTrue"
              />
              <label htmlFor="authorizedTrue"> Yes </label>
              <div></div>
              <input
                className="check"
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

// hold for now

// visa sponsorship question ?

// prior conviction clause
// check box yes / no
// explain field
