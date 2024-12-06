import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ regDataLogin }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();


  function verification(e) {
    e.preventDefault();
    if (regDataLogin?.email === email && regDataLogin?.pwd === pwd) {
      alert("Login Successful");
      navigate("/dash"); 
    } else {
      alert("Login Failed");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={verification}>
       
        <div className="form-group">
          <label htmlFor="emailInput">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

       
        <div className="form-group">
          <label htmlFor="passwordInput">Password:</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Enter password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

     
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
