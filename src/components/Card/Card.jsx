import React from 'react'
import './Cards.css'
import CaptchaC from '../CaptchaC'
import Button from '@mui/material/Button'

const Card = () => {
    return (
        <div>
            <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5">
                    <label>Mobile Number</label>
                    <input class="mobile" type="text" placeholder="Enter mobile number"></input><br/>
                    <label class="otp1">OTP</label>
                    <input class="otp" type="text" placeholder="Enter the OTP"></input>
                    <div className=" mobile_button">
                        <Button variant="contained">Resend OTP</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card