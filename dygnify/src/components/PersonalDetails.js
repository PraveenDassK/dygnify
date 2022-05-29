import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const PersonalDetails = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    age: "",
    gender: "",
    inputAddress: "",
    inputCity: "",
    inputState: "",
    inputZip: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, "final output");
    alert("Form submitted Successfully");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setData({ ...data, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} validate>
      <div className="row mt-3 ">
        <div className="form-group col-md-6 ">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => handleChange(e)}
            name="firstname"
            placeholder="Enter your FirstName"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label>LastName</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            onChange={(e) => handleChange(e)}
            placeholder="Enter your lastName"
            required
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group col-md-4 ">
          <label>Phonenumber</label>
          <input
            type="text"
            className="form-control"
            name="phonenumber"
            onChange={(e) => handleChange(e)}
            placeholder="Enter your PhoneNumber"
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label>Age</label>
          <input
            type="text"
            className="form-control "
            name="age"
            onChange={(e) => handleChange(e)}
            placeholder="Age"
            required
          />
        </div>
        <div className="form-group col-md-4 ">
          <label>Gender</label>
          <select
            className="form-control"
            name="gender"
            onChange={(e) => handleChange(e)}
            required
          >
            <option defaultValue>Choose...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="not to say">I prefer not to say</option>
          </select>
        </div>
      </div>
      <div className="form-group mt-3">
        <label>Address</label>
        <input
          type="text"
          className="form-control "
          name="inputAddress"
          onChange={(e) => handleChange(e)}
          placeholder="1234 Main St"
          required
        />
      </div>
      <div className="row mt-3">
        <div className="form-group col-md-4">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            name="inputCity"
            placeholder="City Name"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            name="inputState"
            placeholder="Enter State Name"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label>Zip</label>
          <input
            type="text"
            className="form-control"
            name="inputZip"
            placeholder="Enter postal code"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-lg mt-5">
        Submit
      </button>
    </form>
  );
};
export default PersonalDetails;
