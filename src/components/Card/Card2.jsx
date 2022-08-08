import React from 'react'
// import './Cards.css'
// import './Cards1.css'
import './Card2.css'
import CaptchaC from '../CaptchaC'
import Button from '@mui/material/Button'

const Card2 = () => {
    return (
        <div className='demo'>
            <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body p-5">
                    <h3 className="uk-card-title">Enter Usename/Email</h3>
                    {/* form page */} 
                    <form>
                        <div class="">
                            <label>Username</label>
                            <input class="email" type="email" placeholder='enter username/email'></input><br/>
                            <label>Password</label>
                            <input class="password" type="password" placeholder='Password'></input> <br />
                            <label>Captcha</label>
                            <input class="captcha" type="text" placeholder='Enter Captcha'></input> <br />
                            <img class = "captcha-img" src = "https://www.tsohost.com/assets/uploads/blog/capcha.jpeg"></img>
                            <div className="submit">
                                <Button variant="contained">Submit</Button>
                             </div>
                        </div>
                    {/* <div class="form-group">
                        <label >Email address</label>
                        <input type="email" class="form-control email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label class="form-control">Enter Captcha</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button> */}
                    </form>
                    {/* <CaptchaC/> */}
                </div>
            </div>
        </div>
    )
}

export default Card2