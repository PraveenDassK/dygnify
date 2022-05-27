import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BusinessDetails = () => {
  return (
    <form>
      <div class="form-group mt-3">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control "
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
    </form>
  );
};
export default BusinessDetails;
