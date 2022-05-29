import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const LoanDetails = () => {
  const [data, setData] = useState({
    loanamount: "",
    intrestrate: "",
    tenure: "",
    monthlyemi: "",
    bankacc: "",
    bankname: "",
    ifsccode: "",
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
      <div className="row mt-3">
        <div className="form-group col-md-6 ">
          <label>Loan Amount</label>
          <input
            type="text"
            className="form-control"
            name="loanamount"
            onChange={(e) => handleChange(e)}
            placeholder="Loan Amount"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label>Intrest Rate</label>
          <input
            type="text"
            className="form-control "
            name="intrestrate"
            onChange={(e) => handleChange(e)}
            placeholder="Intrest Rate"
            required
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group col-md-6 ">
          <label>Ioan Tenure</label>
          <select
            className="form-control"
            name="tenure"
            onChange={(e) => handleChange(e)}
            required
          >
            <option defaultValue>Choose...</option>
            <option value="6 months">6 Months</option>
            <option value="12 monts">12 Months</option>
            <option value="2 year">2Year</option>
            <option value="4 year">4Year</option>
            <option value="6 year">6Year</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label>Monthly EMI</label>
          <input
            type="text"
            className="form-control"
            name="monthlyemi"
            onChange={(e) => handleChange(e)}
            placeholder="Monthly EMI"
            required
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group col-md-4">
          <label>Bank Acc number</label>
          <input
            type="text"
            className="form-control"
            name="bankacc"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Bank Account Number"
            required
          />
        </div>
        <div className="form-group col-md-4 ">
          <label>Bank Name</label>
          <input
            type="text"
            className="form-control"
            name="bankname"
            onChange={(e) => handleChange(e)}
            placeholder="BankName"
            required
          />
        </div>
        <div className="form-group col-md-4 ">
          <label>IfSCCode</label>
          <input
            type="text"
            className="form-control"
            name="ifsccode"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Ifsc Code"
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
export default LoanDetails;
