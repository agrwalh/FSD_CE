import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration({ regData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  function getData(e) {
    e.preventDefault();
    const data = { name, email, pwd };
    regData(data); // Pass the collected data to the parent component or handle it
  }

  return (
    <div>
      <h2>Registration</h2>
      <form>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password:</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button onClick={getData} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
