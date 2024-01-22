import React, { useState } from "react";

function DemoCompo() {
  const [firstname, setFirstName] = useState("");
  const [courseDetails, setCourseDetails] = useState("");
  const [genderDetails, setGenderDetails] = useState("");
  const [dob, setDob] = useState("");

  const [maleRadio, setMaleRadioChecked] = useState(false);
  const [femailRadio, setFemaleRadioChecked] = useState(false);
  const [otheRadio, setOtherRadioChecked] = useState(false);
  let intialPersonObj = {
    name: "",
    dob: "",
    course: "",
    gender: "",
  };
  const [personDetails, setPersonDetails] = useState(intialPersonObj);

  return (
    <div className="container">
      <div>
        firstname:{personDetails.name} <br></br>
        course:{personDetails.course}
        <br></br>
        gender:{personDetails.gender}
        <br></br>
        DOB:{personDetails.dob}
        <br></br>
        <br></br>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">Demo form</div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>

        <div className="col">
          <label> Firstname </label>
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            size="15"
            value={firstname}
            onChange={(event) => {
              console.log("onChange: ", event.target.value);
              setFirstName(event.target.value);
            }}
            required
          />
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <label>Course :</label>

          <select
            value={courseDetails}
            onChange={(event) => {
              console.log("onChange course: ", event.target.value);
              setCourseDetails(event.target.value);
            }}
          >
            <option value="Course">Course</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
          </select>
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <label>Gender :</label>
          <br></br>
          <input
            type="radio"
            value="male"
            name="gender"
            onChange={(event) => {
              setGenderDetails(event.target.value);
              setMaleRadioChecked(event.target.checked);
            }}
            checked={maleRadio}
          />
          Male
          <br></br>
          <input
            type="radio"
            value="female"
            name="gender"
            onChange={(event) => {
              setGenderDetails(event.target.value);
              setFemaleRadioChecked(event.target.checked);
            }}
            checked={femailRadio}
          />
          Female
          <br></br>
          <input
            checked={otheRadio}
            type="radio"
            value="other"
            name="gender"
            onChange={(event) => {
              setGenderDetails(event.target.value);
              setOtherRadioChecked(event.target.checked);
            }}
          />
          Other
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <label>Date :</label>
          <br></br>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <button
            type="submit"
            class="registerbtn"
            onClick={() => {
              setPersonDetails({
                name: firstname,
                course: courseDetails,
                dob: dob,
                gender: genderDetails,
              });
            }}
          >
            Submit
          </button>
          &nbsp; &nbsp;
          <button
            type="submit"
            class="registerbtn"
            onClick={() => {
              setPersonDetails({
                name: "",
                course: "",
                dob: "",
                gender: "",
              });

              setCourseDetails("");
              setDob("");
              setFirstName("");
              setGenderDetails("");
              setMaleRadioChecked(false);
              setFemaleRadioChecked(false);
              setOtherRadioChecked(false);
            }}
          >
            Reset
          </button>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default DemoCompo;
