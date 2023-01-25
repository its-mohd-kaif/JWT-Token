import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  // UseState For Email
  const [email, setEmail] = useState("");
  // UseState For Password
  const [pass, setPass] = useState("");
  let navigate = useNavigate();
  // Function that take email input field
  const usernameHandler = (e) => {
    setEmail(e.target.value);
  };
  // Function that take password input field
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  // Login Handler
  const loginHandler = () => {
    // check validation
    if (email === "") {
      alert("Email Field Can Not Be Empty");
      document.getElementById("email").focus();
    } else if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        )
    ) {
      alert("Write Proper Email");
      document.getElementById("email").focus();
    } else if (pass === "") {
      alert("Password Field Can Not Be Empty");
      document.getElementById("pass").focus();
    } else {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }),
      })
        .then((res) => res.json())
        .then((val) => {
          // Set Token into LocalStorage
          localStorage.setItem("JWT_token", val.token);
          if (val.token === localStorage.getItem("JWT_token")) {
            alert("User Authenticated");
            navigate("/home");
          } else {
            alert("Token Not Match");
          }
        });
    }
  };
  return (
    <div>
      <center>
        <br></br>
        <h1>Login</h1>
        <br></br>
        <div style={{ width: "50%" }}>
          {/* Input Form */}
          <div className="input-group mb-3">
            <input
              onChange={usernameHandler}
              type="email"
              id="email"
              className="form-control"
              placeholder="Type Email..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              Email
            </span>
          </div>
          <div className="input-group mb-3">
            <input
              onChange={passHandler}
              type="password"
              id="pass"
              className="form-control"
              placeholder="Type password..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              Password
            </span>
          </div>
          <div className="d-grid gap-2 col-12 mx-auto">
            <button
              onClick={loginHandler}
              className="btn btn-primary"
              type="button"
            >
              Login
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default LandingPage;
