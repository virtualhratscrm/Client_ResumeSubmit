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
            alt="virtual HR Co LOGO"
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
            <label>Email address * </label>
            <div></div>
            <input
              type="email"
              id="email"
              name="email"
              required={true}
              placeholder="email address"
            />
          </div>
          <div className="forminfobox">
            <label>First name: *</label>
            <div></div>
            <input
              type="text"
              id="fname"
              name="fname"
              required={true}
              placeholder="First Name"
            />
          </div>
          <div className="forminfobox">
            <label>Last name: *</label>
            <div></div>
            <input
              type="text"
              id="lname"
              name="lname"
              required={true}
              placeholder="Last Name"
            />
          </div>
          <div className="forminfobox">
            <label>Phone number *:</label>
            <div></div>
            <input
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
            <label>Address Line 1 *:</label>
            <div></div>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              required={true}
              placeholder=" Number Street Name"
            />
            <div></div>
            <label>Address Line 2 :</label>
            <div></div>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              placeholder="Apt or Suite Number "
            />
            <div></div>
            <label>City *:</label>
            <div></div>
            <input
              type="text"
              id="city"
              name="city"
              required={true}
              placeholder=" city"
            />
            <div></div>
            <label>State *:</label>
            <div></div>
            <input
              type="text"
              id="state"
              name="state"
              required={true}
              placeholder=" state"
            />
            <div></div>
            <label> Zip Code *:</label>
            <div></div>
            <input
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
              <label> Line Cook</label>
              <div></div>
              <input
                className="check"
                type="checkbox"
                name="position2"
                value="Server"
              />
              <label> Server</label>
              <div></div>
              <input
                type="checkbox"
                className="check"
                name="position3"
                value="Server Assistant"
              />
              <label> Server Assistant</label>
              <div></div>
              <input
                type="checkbox"
                className="check"
                name="position4"
                value="Food Runner"
              />
              <label> Food Runner</label>
              <div></div>
              <input
                type="checkbox"
                className="check"
                name="position5"
                value="Take Out Attendant"
              />
              <label> Take Out Attendant</label>
              <div></div>
              <input
                type="checkbox"
                className="check"
                name="position6"
                value="Don't see what you need? Submit your resume anyways for future opportunities"
              />
              <label>
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
              <label> Yes </label>
              <div></div>
              <input
                className="check"
                type="checkbox"
                name="authorizedFalse"
                value="authorizedFalse"
              />
              <label> No </label>
            </div>
          </div>
          <div className="forminfobox">
            <h3>*</h3>
            <p>Date</p>
            <input type="date" required={true} />
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

// visa sponsorship question ?

// hold for now
// prior conviction clause
// check box yes / no
// explain field
