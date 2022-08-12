import React from 'react'
import './Cards.css'
import './CardPassenger.css'
import CaptchaC from '../CaptchaC'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const CardStudent = () => {
    return (
        <div>
            <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5">
                <Link to="/feedback_student">
                    <button type="button" class="btn btn-primary passenger-button">Training session feedback</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default CardStudent