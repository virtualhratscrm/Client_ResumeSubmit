import React, { Component } from "react";
import "./ResumeForm.css";

// var jobTypes = document.querySelectorAll(".jobtype");

// console.log("test");

// function validateJobTypeChecked() {
//   var sucess = false;
//   console.log(jobTypes);
//   for (let i = 0; i < jobTypes.length; i++) {
//     if (jobTypes[i].checked) {
//       sucess = true;
//     }
//   }
// }

// validateJobTypeChecked();

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
          {/* make these 2 paragraphs changeable from admin on backend */}
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
            <label htmlFor="email">Email address : * </label>
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
            <label htmlFor="fname">First name : *</label>
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
            <label htmlFor="lname">Last name : *</label>
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
            <label htmlFor="phone">Phone number : *</label>
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
            <label htmlFor="addressLine1">Address Line 1 : *</label>
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
            <label htmlFor="city">City : *</label>
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
            <label htmlFor="state">State : *</label>
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
              <option value="FL" defaultValue>
                Florida
              </option>
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

            <div></div>
            <label htmlFor="zipcode"> Zip Code : *</label>
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

{/* make these 'open job types' changeable from admin on backend */}

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

{/* is there a safe way to have them upload a .pdf or .doc file instead ? */}

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
            <label htmlFor="highestEducation">
              <h3>Highest Education Level Completed : *</h3>
            </label>
            <div></div>
            <select name="highestEducation" required={true}>
              <option value="SOME HS">Some High School</option>
              <option value="HS Grad">High School / GED</option>
              <option value="SOME College">Some College</option>
              <option value="AS degree">Associates (2 years)</option>
              <option value="BS degree">Bachelors (4 years)</option>
              <option value="MS degree">Masters (6 years)</option>
              <option value="DS degree">Doctorate </option>
            </select>
          </div>
          <div className="forminfobox">
            <label htmlFor="yearsExperience">
              {" "}
              <h3>Years of Experience : * </h3>{" "}
            </label>
            <div></div>
            <select name="yearsExperience" required={true}>
              <option value="1-2">1-2 years</option>
              <option value="3-4">3-4 years</option>
              <option value="5 plus">5 + years</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="forminfobox">
            <h3>Salary Expectations *</h3>
            <input type="number" min={7} max={100000}  />
            <select name="Salary" required={true}>
              <option value="year">Annually</option>
              <option value="hour" defaultValue>
                Hourly
              </option>
            </select>
          </div>
          <div className="forminfobox">
            <h3>Schedule Availability *</h3>
            <h4>Select all that Apply</h4>
            <div className="formArea">
              <input
                className="schedCheck"
                type="checkbox"
                name="openAvail"
                value="open avail"
              />
              <label htmlFor="openAvail"> Open </label>
              <div></div>
              <input
                className="schedCheck"
                type="checkbox"
                name="weekends"
                value="weekends"
              />
              <label htmlFor="weekends"> Available on Weekends </label>{" "}
              <div></div>
              <input
                className="schedCheck"
                type="checkbox"
                name="nightsOnly"
                value="nightsOnly"
              />
              <label htmlFor="nightsOnly"> PM Only </label> <div></div>
              <input
                className="schedCheck"
                type="checkbox"
                name="morningsOnly"
                value="morningsOnly"
              />
              <label htmlFor="morningsOnly"> AM only </label> <div></div>
              <input
                className="schedCheck"
                type="checkbox"
                name="amandpm"
                value="amandpm"
              />
              <label htmlFor="amandpm">Both AM and PM Shifts </label>
              <div></div>
              <input
                className="schedCheck"
                type="checkbox"
                name="notWeekends"
                value="notWeekends"
              />
              <label htmlFor="notWeekends">NOT Available on Weekends </label>{" "}
            </div>
          </div>
          <div className="forminfobox">
            <h3>Today's Date : *</h3>

            <input
              aria-label="today's date"
              aria-required="true"
              type="date"
              required={true}
            />
          </div>
          {/* on sumbit click validate position, authorized,   
        and avail checkboxes checked */}
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


// validate input check boxes - positions - avail - authorized 

// 3 for loops

// way to make dynamic opening paragraph and open positions ????

// security of pdf or doc vs upload resume as String ...

// inputs work / user testing 

// does info need to be in this.state? 

/// regex for name only letters and spaces - phone and zip only numbers and - and ()'s
/// address regex no special chars 
/// regex for no "add" "drop" "alter" "create" - ok what about walter  or maddie?

