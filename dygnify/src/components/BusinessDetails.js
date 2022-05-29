import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const BusinessDetails = () => {
  const [data, setData] = useState({
    companyname: "",
    companyaddress: "",
    inputgst: "",
    scale: "",
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
      <div className="form-group mt-3">
        <label>Company Name</label>
        <input
          type="text"
          className="form-control "
          name="companyname"
          onChange={(e) => handleChange(e)}
          placeholder="Enter Company Name"
          required
        />
      </div>
      <div className="form-group mt-3">
        <label>Company Address</label>
        <input
          type="text"
          className="form-control "
          name="companyaddress"
          onChange={(e) => handleChange(e)}
          placeholder="1234 Main St"
          required
        />
      </div>
      <div className="row mt-3">
        <div className="form-group col-md-6 ">
          <label>GST NO</label>
          <input
            type="text"
            className="form-control"
            name="inputgst"
            onChange={(e) => handleChange(e)}
            placeholder="Enter GST No"
            required
          />
        </div>
        <div className="form-group col-md-6 ">
          <label>Scale</label>
          <select
            className="form-control"
            name="scale"
            onChange={(e) => handleChange(e)}
            required
          >
            <option defaultValue>Choose...</option>
            <option value="small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group col-md-4">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            name="inputCity"
            placeholder="Enter City Name"
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
            placeholder="Enter State"
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
            placeholder="Enter Postal Code"
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
export default BusinessDetails;
