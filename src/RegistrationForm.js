import React from "react";
import { useState } from "react";

const RegistrationForm = ({ register, registerStatus, setRegisterStatus }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [entrypoints, setEntrypoints] = useState("");
  const [email, setEmail] = useState("");
  const [studentid, setStudentid] = useState("");
  const formhandler = (e) => {
    e.preventDefault();
    let user = {
      username: name,
      age: parseInt(age),
      phonenumber: phonenumber,
      address: address,
      entrypoints: entrypoints,
      email: email,
      studentid: parseInt(studentid),
    };

    register(user);
  };

  const clearInputs = () => {
    setName("");
    setAddress("");
    setAge("");
    setEmail("");
    setEntrypoints("");
    setPhonenumber("");
    setStudentid("");
  };

  const Alert = () => {
    if (registerStatus === "0") {
      setTimeout(() => {
        setRegisterStatus("");
      }, 5000);
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Duplicate studentid
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setRegisterStatus("");
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    } else if (registerStatus === "1") {
      clearInputs();
      setTimeout(() => {
        setRegisterStatus("");
      }, 3000);

      return (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Inserted successfully
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setRegisterStatus("");
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    return "";
  };

  return (
    <>
      <Alert />
      <div id="register" className="tab-pane active">
        <br />
        <h3 className="ml-3 mt-1">Register</h3>
        <form id="registerform" onSubmit={formhandler}>
          <div className="form-group w-25 ml-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Username"
              required
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group w-25 ml-3">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Age"
              required
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group w-25 ml-3">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="number"
              id="phonenumber"
              placeholder="phonenumber"
              required
              className="form-control"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>
          <div className="form-group w-25 ml-3">
            <label htmlFor="address">Address</label>

            <input
              type="text"
              id="address"
              placeholder="Address"
              required
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group w-25 ml-3">
            <label htmlFor="entrypoints">Entry Points</label>
            <input
              type="text"
              id="entrypoints"
              placeholder="entrypoints"
              required
              className="form-control"
              value={entrypoints}
              onChange={(e) => setEntrypoints(e.target.value)}
            />
          </div>
          <div className="form-group w-25 ml-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              required
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group w-25 ml-3">
            <label htmlFor="studentid">Student Id</label>
            <input
              type="number"
              id="studentid"
              placeholder="studentid"
              required
              className="form-control"
              value={studentid}
              onChange={(e) => setStudentid(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-outline-primary ml-3 w-25">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
