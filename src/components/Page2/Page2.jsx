import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page2.css'

const page2 = () =>{
    return(
        <div>
            <div>
            <img src="https://chennaimetrorail.org/wp-content/uploads/2021/03/cmrl-banner-53217.png" class="chennaimetro"/>
            </div>
            <div class="notice">
                <h2>Redirect Notice</h2>
            </div>
            
            <div class="heading4">
            <h4 class="heading1">The page you were on is trying to send you to <a href="#">https://example.com</a></h4>
                <h4 class="heading2">If you do not want to visit that page,you can <a href="#">return to the previous page</a></h4>
            </div>
        </div>
    )
}
export default page2;
