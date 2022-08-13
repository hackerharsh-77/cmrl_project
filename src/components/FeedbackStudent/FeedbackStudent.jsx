import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeedbackStudent.css'
import Button from '@mui/material/Button'


const FeedbackStudent= ()=>{
    return(
        
        <div class="main-container">
             <div className='demo'>
                <div>
                <div className="">
                    <h3 className="uk-card-title">Trainers Survey</h3>
                    {/* form page */} 
                    <form class="form">
                    
                    <div class="feedback">
                        <div class="name card">
                            <label className="b">Name</label>
                            <input class="email" type="text" placeholder='Enter your full Name'></input>
                        </div>
                        <div class="gender" style={{backgroundColor:"white",padding:"1rem",border:"1px solid grey"}}>
                            <label className="b">Gender</label>
                            <input type='radio' name="gender" /><label>Male</label>
                            <input type='radio' name="gender" /><label>Female</label>
                        </div>
                        <div class="name" style={{backgroundColor:"white",padding:"1rem",border:"1px solid grey"}}>
                            <label className="b">Mobile Number</label>
                            <input class="mobile" type="numeric" placeholder='Enter Mobile number'></input>
                        </div>
                        <div class="gender" style={{backgroundColor:"white",padding:"1rem",border:"1px solid grey"}}>
                            <label className="b">Did your trainer have a thorough grasp of the subject?</label> <br />
                            <input type="radio" class="size" name="long"></input><label>Excellent</label>
                            <input type="radio" class="size" name="long"></input><label>Good</label>
                            <input type="radio" class="size" name="long"></input><label>Fair</label>
                            <input type="radio" class="size" name="long"></input><label>Poor</label>
                            <input type="radio" class="size" name="long"></input><label>Very Poor</label>
                            
                            
                        </div>
                        <div class="gender" style={{backgroundColor:"white",padding:"1rem",border:"1px solid grey"}}>
                            <label className="b">Did your trainer actively invite questions?</label> <br />
                            <input type="radio" class="size" name="long"></input><label>Excellent</label>
                            <input type="radio" class="size" name="long"></input><label>Good</label>
                            <input type="radio" class="size" name="long"></input><label>Fair</label>
                            <input type="radio" class="size" name="long"></input><label>Poor</label>
                            <input type="radio" class="size" name="long"></input><label>Very Poor</label>
                            
                        </div>
                        <div class="gender" style={{backgroundColor:"white",padding:"1rem",border:"1px solid grey"}}>
                            <label className="b">Was Individual help provided when needed?</label> <br />
                            <input type="radio" class="size" name="long"></input><label>Excellent</label>
                            <input type="radio" class="size" name="long"></input><label>Good</label>
                            <input type="radio" class="size" name="long"></input><label>Fair</label>
                            <input type="radio" class="size" name="long"></input><label>Poor</label>
                            <input type="radio" class="size" name="long"></input><label>Very Poor</label>
                            
                        </div>
                        <div class="gender" style={{backgroundColor:"white",padding:"1rem",border:"1px solid grey"}}>
                            <label className="b">Was the training material and content helpful for you?</label> <br />
                            <input type="radio" class="size" name="long"></input><label>Excellent</label>
                            <input type="radio" class="size" name="long"></input><label>Good</label>
                            <input type="radio" class="size" name="long"></input><label>Fair</label>
                            <input type="radio" class="size" name="long"></input><label>Poor</label>
                            <input type="radio" class="size" name="long"></input><label>Very Poor</label>
                            
                        </div>
                        <div class="gender" style={{backgroundColor:"white",padding:"1rem",border:"1px solid grey"}}>
                            <label className="b">How would you rate the teaching quality of the training?</label> <br />
                            <div className='metro'>
                                <h4>Poor</h4>
                                <input type="radio" class="size" name="long"></input><label>0</label>
                                <input type="radio" class="size" name="long"></input><label>1</label>
                                <input type="radio" class="size" name="long"></input><label>2</label>
                                <input type="radio" class="size" name="long"></input><label>3</label>
                                <input type="radio" class="size" name="long"></input><label>4</label>
                                <input type="radio" class="size" name="long"></input><label>5</label>
                                <input type="radio" class="size" name="long"></input><label>6</label>
                                <input type="radio" class="size" name="long"></input><label>7</label>
                                <input type="radio" class="size" name="long"></input><label>8</label>
                                <input type="radio" class="size" name="long"></input><label>9</label>
                                <input type="radio" class="size" name="long"></input><label>10</label>
                                <h4>Excellent</h4>
                            </div>
                        </div>
                        <div class="gender" style={{backgroundColor:"white",padding:"1rem",border:"1px solid grey"}}>
                        
                            <label className="b">How would you rate the training session overall?</label> <br />
                            <div className='metro'>
                                <h4>Poor</h4>
                                <input type="radio" class="size" name="long"></input><label>0</label>
                                <input type="radio" class="size" name="long"></input><label>1</label>
                                <input type="radio" class="size" name="long"></input><label>2</label>
                                <input type="radio" class="size" name="long"></input><label>3</label>
                                <input type="radio" class="size" name="long"></input><label>4</label>
                                <input type="radio" class="size" name="long"></input><label>5</label>
                                <input type="radio" class="size" name="long"></input><label>6</label>
                                <input type="radio" class="size" name="long"></input><label>7</label>
                                <input type="radio" class="size" name="long"></input><label>8</label>
                                <input type="radio" class="size" name="long"></input><label>9</label>
                                <input type="radio" class="size" name="long"></input><label>10</label>
                                <h4>Excellent</h4>
                            </div>
                        </div>
                        <div class="input" style={{backgroundColor:"white",padding:"1rem",border:"1px solid grey"}}>
                            <input type="textarea" class="size suggestion" placeholder="Training session key takeaways..."></input>
                        </div>

                            <div className="submit">
                                <Button class="btn btn-primary button-submit-feedback">Submit</Button>
                            </div>
                        </div>
                    </form>
                    {/* <CaptchaC/> */}
                </div>
            </div>
        </div>
            
        </div>
    )
}
export default FeedbackStudent;