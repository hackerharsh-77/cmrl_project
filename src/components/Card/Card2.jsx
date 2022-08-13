import React, { useState } from "react";
// import './Cards.css'
// import './Cards1.css'
import "./Card2.css";
import CaptchaC from "../CaptchaC";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";
// import { createHashHistory } from 'history'

const Card2 = (props) => {
  // const history = createHashHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [otp,setotp] = useState("");
  const [data1,setData1] = useState("");
  const [msg, setmsg] = useState(false);

  const call = async () => {
    setmsg(true);
    const response = await axios
      .post("http://localhost:7777/app/verify", {
        email: `${email}`,
      })
      .then(function (response) {
        setData1(response.data);
        console.log(response.data);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };

  function verify_otp(){
    if(otp.length!=6){
      console.log("Enter 6 digit OTP")
    }else{
      let text = data1;
    console.log(data1);
    let result = text.slice(7,13);
    console.log(result);
    console.log(otp);
    if(otp === result){console.log("success")} else{console.log("failure")}
    }
  }
  return (
    <div className="demo style-demo">
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
                  onChange={(e)=>{
                    setotp(e.target.value);
                  }}
                />
                <button
                  class="btn btn-outline-secondary send"
                  type="button"
                  id="button-addon2"
                  onClick={() => {
                    call();
                  }}
                >
                  Send OTP
                </button>
                <button
                  class="btn btn-outline-secondary verify"
                  type="button"
                  id="button-addon2"
                  onClick={()=>{
                    verify_otp();
                  }}
                >
                  Verify OTP
                </button>
              </div>{" "}
              <br />
              <Link to="/redirect">
                <div className="submit">
                  <Button variant="contained">Submit</Button>
                </div>
              </Link>
            </div>
          </form>
          {/* <CaptchaC/> */}
        </div>
      </div>
    </div>
  );
};

export default Card2;

