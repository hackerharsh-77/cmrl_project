import React from 'react'
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
function ThankYou() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['name']);
  console.log("cookies",cookies.logged_in);
  if(cookies.logged_in === "true") {

  }else{
      navigate("/")
  }

  return (
    <div>
        <h3>Thank You for your Feedback</h3>
        <Link to="/">
            Revisit Home page
        </Link>
    </div>
  )
}

export default ThankYou