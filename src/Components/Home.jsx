import React from "react";
import { Link } from "react-router-dom";
function Home() {
  // Home Component
  return (
    <div>
      <center>
        <br></br>
        <h1>Welcome User</h1>
        <br></br>
        <div class="d-grid gap-2 col-6 mx-auto">
          <Link to={"/"} class="btn btn-primary" type="button">
            Home
          </Link>
        </div>
      </center>
    </div>
  );
}

export default Home;
