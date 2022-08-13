import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feedback.css'
import Button from '@mui/material/Button'
import { selectClasses } from '@mui/material';




const Feedback = () => {
    
    function seemsg(e){
        console.log(e);
    }
    

    return(
        
        <div class="main-container">
             <div className='demo'>
                <div>
                <div className="">
                    <h3 className="uk-card-title">Commuters Survey</h3>
                    {/* form page */} 
                    <form class="form">
                    
                    <div class="feedback">
                        <div class="name">
                            <label className="b">Name</label>
                            <input class="email" type="text" placeholder='Enter your full Name'></input>
                        </div>
                        <div class="gender">
                            <label className="b">Gender</label>
                            <input type='radio' name="gender" onChange={(e)=>{seemsg(e.target.value);}}/><label>Male</label>
                            <input type='radio' name="gender" onChange={(e)=>{seemsg(e.target.value);}}/><label>Female</label>
                        </div>
                        <div class="name">
                            <label className="b">Mobile Number</label>
                            <input class="mobile" type="numeric" placeholder='Enter Mobile number'></input>
                        </div>
                        <div class="gender">
                            <label className="b">Employment Status</label><br />
                            <input type="radio" class="size" name="emp"></input><label>Government</label>
                            <input type="radio" class="size" name="emp"></input><label>Private</label>
                            <input type="radio" class="size" name="emp"></input><label>IT</label>
                            <input type="radio" class="size" name="emp"></input><label>Business</label>
                            <input type="radio" class="size" name="emp"></input><label>Student</label>
                            <input type="radio" class="size" name="emp"></input><label>Others</label><br/>
                        </div>
                        <div class="gender">
                            <label className="b">Age Group(in Yrs)</label><br />
                            <input type="radio" class="size" name="age"></input><label>Less than 20</label>
                            <input type="radio" class="size" name="age"></input><label>20 to 30</label>
                            <input type="radio" class="size" name="age"></input><label>30 to 40</label>
                            <input type="radio" class="size" name="age"></input><label>40 to 50</label>
                            <input type="radio" class="size" name="age"></input><label>50 to 60</label>
                            <input type="radio" class="size" name="age"></input><label>More than 60</label>
                        </div>
                        <div class="gender">
                            <label className="b">How long you are travelling in CMRL Metro</label> <br />
                            <input type="radio" class="size" name="long"></input><label>Occasional</label>
                            <input type="radio" class="size" name="long"></input><label>6 months</label>
                            <input type="radio" class="size" name="long"></input><label>1 to 2 years</label>
                            <input type="radio" class="size" name="long"></input><label>2 to 3 years</label>
                            <input type="radio" class="size" name="long"></input><label>3 to 4 years</label>
                            <input type="radio" class="size" name="long"></input><label>More than 4 years</label><br />
                        </div>
                        <div class="gender">
                            <label className="b">How far is your residence from Metro station</label> <br />
                            <input type="radio" class="size" name="residence"></input><label>Less than 1 km</label>
                            <input type="radio" class="size" name="residence"></input><label>1 to 4 kms</label>
                            <input type="radio" class="size" name="residence"></input><label>4 to 8 kms</label>
                            <input type="radio" class="size" name="residence"></input><label>8 to 12 kms</label>
                            <input type="radio" class="size" name="residence"></input><label>12 to 15 kms</label>
                            <input type="radio" class="size" name="residence"></input><label>More than 15 kms</label> <br />
                        </div>
                        <div class="gender">
                            <label className="b">How you are commuting to Metro Station</label> <br />
                            <input type="radio" class="size" name="commute"></input><label>CMRL Feeder Services</label>
                            <input type="radio" class="size" name="commute"></input><label>Bus</label>
                            <input type="radio" class="size" name="commute"></input><label>Car</label>
                            <input type="radio" class="size" name="commute"></input><label>Bike</label>
                            <input type="radio" class="size" name="commute"></input><label>Cycle</label>
                            <input type="radio" class="size" name="commute"></input><label>By Walk</label><br />
                        </div>
                        <div class="gender">
                            <label className="b">What CMRL feeder services you prefer to have more in Metro Station</label> <br />
                            <input type="radio" class="size" name="service"></input><label>Mini Bus</label>
                            <input type="radio" class="size" name="service"></input><label>Auto</label>
                            <input type="radio" class="size" name="service"></input><label>Bike Taxi</label>
                            <input type="radio" class="size" name="service"></input><label>Rented Bikes</label>
                            <input type="radio" class="size" name="service"></input><label>Rented Cycles</label>
                            <input type="radio" class="size" name="service"></input><label>CMRL Free Cycles</label><br />
                        </div>
                        <div class="gender">
                            <label className="b">CMRL Metro premises is following 100% cleanliness</label> <br />
                            <input type="radio" class="size" name="clean"></input><label>Strongly Agree</label>
                            <input type="radio" class="size" name="clean"></input><label>Agree</label>
                            <input type="radio" class="size" name="clean"></input><label>Somewhat Agree</label>
                            <input type="radio" class="size" name="clean"></input><label>Disagree</label>  
                            <input type="radio" class="size" name="clean"></input><label>Strongly Disagree</label><br />
                        </div>
                        <div class="gender">
                            <label className="b">What support do you require to continue travelling in Metro</label> <br />
                            <input type="radio" class="size" name="support"></input><label>Connectivity to stations</label>
                            <input type="radio" class="size" name="support"></input><label>Signages</label>
                            <input type="radio" class="size" name="support"></input><label>Parking</label>
                            <input type="radio" class="size" name="support"></input><label>Facilities</label>
                            <input type="radio" class="size" name="support"></input><label>Customer Support</label>
                            <input type="radio" class="size" name="support"></input><label>others</label>
                            <input type="textarea"></input>
                        </div>
                        <div class="gender">
                            <label className="b">Do you feel Metro is a safe Transport</label> <br />
                            <input type="radio" class="size" name="safe"></input><label>Yes</label>
                            <input type="radio" class="size" name="sage"></input><label>No</label>
                        </div>
                        <div class="input">
                            <label className="b">If no, Suggestion for improvement:</label>
                            <input type="textarea"></input> <br />
                            <input type="textarea" class="size suggestion" placeholder="Other suggestions if any..."></input>
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
export default Feedback;