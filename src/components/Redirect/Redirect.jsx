
import React from 'react'
import Card from '../Card/Card'
import Card1 from '../Card/Card1'
import CardPassenger from '../Card/CardPassenger'
import Card2 from '../Card/Card2'
import CardStudent from '../Card/CardStudent'

const Redirect = () => {


    return (
        <body>
            <div id="main">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <CardPassenger/>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <CardStudent />
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Redirect