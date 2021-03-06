import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.style.css";

const Admin = () => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get("/info");

      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="admin">
      <h1 className="admin-heading">Admin View</h1>
      <h1 className="admin-subheading">Details of the registered users</h1>
      <div className="tab"
        style={{
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",  
          overflowX: 'auto',
          boxShadow:'5px 5px 7px' ,
          width: "80%",}}
      >
      <table
        className="admin-table"
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>
              {" "}
              <h2> Firstname</h2>
            </th>
            <th>
              <h2>Lastname</h2>
            </th>
            <th>
              <h2>Address</h2>
            </th>
            <th>
              <h2>Mobile No.</h2>
            </th>
            <th>
              <h2>Aadhaar</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item) => (
                <tr>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.adhaar}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Admin;
