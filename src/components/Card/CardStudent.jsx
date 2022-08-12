import React from 'react'
import './Cards.css'
import './CardPassenger.css'
import CaptchaC from '../CaptchaC'
import Button from '@mui/material/Button'

const CardStudent = () => {
    return (
        <div>
            <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5">
                <button type="button" class="btn btn-primary passenger-button">Student Feedback</button>
                </div>
            </div>
        </div>
    )
}

export default CardStudent