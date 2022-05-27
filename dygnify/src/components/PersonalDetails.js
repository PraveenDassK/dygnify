import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const PersonalDetails = () => {
  return (
    <form>
      <div class="row mt-3">
        <div class="form-group col-md-6 ">
          <label for="firstname">First Name</label>
          <input
            type="text"
            class="form-control"
            id="firstname"
            placeholder="Enter your FirstName"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="lastname">LastName</label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            placeholder="Enter your lastName"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="form-group col-md-4 ">
          <label for="phonenumber">Phonenumber</label>
          <input
            type="text"
            class="form-control"
            id="phonenumber"
            placeholder="Enter your PhoneNumber"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="age">Age</label>
          <input type="text" class="form-control " id="age" placeholder="Age" />
        </div>
        <div class="form-group col-md-4 ">
          <label for="gender">Gender</label>
          <select class="form-control" id="gender">
            <option selected>Choose...</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">I prefer not to say</option>
          </select>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control "
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="row mt-3">
        <div class="form-group col-md-4">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <input type="text" class="form-control" id="inputState" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-5">
        Next
      </button>
    </form>
  );
};
export default PersonalDetails;
