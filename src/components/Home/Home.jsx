import { useState } from 'react'
import React from 'react'
import Card from '../Card/Card'
import Card1 from '../Card/Card1'
import Card2 from '../Card/Card2'

const Home = (props) => {
    const [myBool, setmyBool] = useState(true);

    function toggleBool() {
        setmyBool(!myBool);            
    }

    return (
        <body>
            <div id="main">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-sm-6 mt-5">
                            <Card1 toggleBool={()=>{toggleBool()}}/>
                        </div>
                        <div className="col-sm-6 mt-5">
                            {myBool ? <Card2 /> : <Card/>}
                            {/* <Card2 /> */}
                        </div>
                    </div>
                </div>
            </div>
        </body>

    )
}

export default Home