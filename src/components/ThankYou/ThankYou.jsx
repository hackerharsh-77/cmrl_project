import React from 'react'
import { Link } from "react-router-dom";

function ThankYou() {
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