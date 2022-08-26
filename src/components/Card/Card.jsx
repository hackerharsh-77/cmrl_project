import React from 'react'
import './Cards.css'
import CaptchaC from '../CaptchaC'
import Button from '@mui/material/Button'
import {Link} from "react-router-dom"

const Card = () => {
    return (
        <div>
            <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5">
                    <label>Email</label>
                    <input class="mobile" type="text" placeholder="Enter email"></input><br/>
                    <label class="otp1">Password</label>
                    <input class="otp" type="text" placeholder="Enter the password"></input>
                    <Link to="/admin">
                    <div className=" mobile_button">
                    <Button variant="contained">Sign in</Button>
                </div>
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Card