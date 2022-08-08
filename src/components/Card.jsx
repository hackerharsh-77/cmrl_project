import React from 'react'
import '../public/css/Cards.css'
import CaptchaC from './CaptchaC'
import Button from '@mui/material/Button'

const Card = () => {
    return (
        <div>
            <div>
                <div class="uk-card uk-card-default uk-card-hover uk-card-body p-5">
                    <h3 class="uk-card-title">Default</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <Button variant="contained">Outlined</Button>

                        </div>
                        <div className="col-md-6">
                            <Button variant="outlined">Outlined</Button>

                        </div>
                    </div>
                    {/*<CaptchaC/>*/}
                </div>
            </div>
        </div>
    )
}

export default Card