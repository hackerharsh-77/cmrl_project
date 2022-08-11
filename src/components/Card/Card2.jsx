import React, { useState } from "react";
// import './Cards.css'
// import './Cards1.css'
import "./Card2.css";
import CaptchaC from "../CaptchaC";
import Button from "@mui/material/Button";
import axios from "axios";

const Card2 = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState(false);

  const call = async () => {
    setmsg(true);
    const response = await axios
      .post("http://localhost:7777/app/verify", {
        email: `${email}`,
      })
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };

  return (
    <div className="demo">
      <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5">
          <h3 className="uk-card-title">Enter Username/Email</h3>
          {/* form page */}
          <form>
            <div class=" justify-content-center">
              <label>Username</label>
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                class="email"
                type="email"
                placeholder="enter username/email"
              ></input>
              <br />
              <label>Password</label>
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                class="password"
                type="password"
                placeholder="Password"
              ></input>{" "}
              <br />
              {msg && <p style={{ color: "red" }}>OTP has been sent</p>}
              <br />
              <div
                style={{ width: "45%", left: "34%", marginTop: "6px" }}
                class="input-group d-flex justify-content-center"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter OTP"
                  aria-label=""
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={() => {
                    call();
                  }}
                >
                  Send OTP
                </button>
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Verify OTP
                </button>
              </div>{" "}
              <br />
              <div className="submit">
                <Button variant="contained">Submit</Button>
              </div>
            </div>
          </form>
          {/* <CaptchaC/> */}
        </div>
      </div>
    </div>
  );
};

export default Card2;
