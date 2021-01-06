import React, { useState } from "react";
import axios from "axios";
import "./homepage.style.css";

const Homepage = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    adhaar: "",
    address: "",
  });

  const { firstName, lastName, address, adhaar, mobileNumber } = info;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (address.length === 0) {
      return alert("Invalid address");
    }
    if (lastName.length === 0) {
      return alert("Invalid last name");
    }
    if (firstName.length === 0) {
      return alert("Invalid First name");
    }
    if (mobileNumber.length !== 10) {
      return alert("Invalid Mobile number");
    }
    if (adhaar.length !== 16) {
      return alert("Invalid adhaar number");
    }
    try {
      await axios.post("/info", info);
    } catch (err) {
      console.log(err);
    }
    setInfo({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      adhaar: "",
      address: "",
    });
  };

  return (
    <div className="homepage">
      <h1 className="homepage-heading">Please enter your details </h1>
      <form className="details-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={handleChange}
        />
        <input
          type="number"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={handleChange}
        />
        <input
          type="number"
          name="adhaar"
          placeholder="Aadhaar"
          value={adhaar}
          onChange={handleChange}
        />
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Homepage;
