import React from "react";

function FormComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col">Registration form</div>
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
            required
          />
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>

        <div className="col">
          <label> Middlename: </label>
          <input
            type="text"
            name="middlename"
            placeholder="Middlename"
            size="15"
            required
          />
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          {" "}
          <label> Lastname: </label>
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            size="15"
            required
          />{" "}
        </div>
        <div className="col"></div>
      </div>

      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <label>Course :</label>

          <select>
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
          <input type="radio" value="Male" name="gender" checked />
          Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
        <div className="col"></div>
      </div>

      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <label>Phone :</label>
          <input
            type="text"
            name="phone"
            placeholder="phone no."
            size="10"
            required
          />
        </div>
        <div className="col"> </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          Current Address :
          <textarea
            cols="80"
            rows="5"
            placeholder="Current Address"
            value="address"
            required
          ></textarea>
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />{" "}
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <label for="psw-repeat">
            <b>Re-type Password</b>
          </label>
          <input
            type="password"
            placeholder="Retype Password"
            name="psw-repeat"
            required
          />{" "}
        </div>
        <div className="col"></div>
      </div>
      <br></br>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          {" "}
          <button type="submit" class="registerbtn">
            Register
          </button>{" "}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default FormComponent;
