import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Station.css'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";

const Station = () => {
    return(
        <div>
            {/* <img src="https://images.indianexpress.com/2022/07/chennai-metro.jpeg"></img> */}
            <div>
            <img src="https://chennaimetrorail.org/wp-content/uploads/2021/03/cmrl-banner-53217.png" class="chennaimetro"/>
            </div>
            <h2 class="main">Select Station</h2>
            <select class="form-control  main" id="station-from">
                <option value="">
                    - Select -
                </option>
                <option value="108">
                    AG - DMS
                </option>
                <option value="117">
                    Airport
                </option>
                <option value="207">
                    Anna Nagar East
                </option>
                <option value="208">
                    Anna Nagar Tower
                </option>
                <option value="114">
                    Arignar Anna Alandur
                </option>
                <option value="212">
                    Arumbakkam
                </option>
                <option value="214">
                    Ashok Nagar
                </option>
                <option value="202">
                    Egmore Metro
                </option>
                <option value="215">
                    Ekkattuthangal
                </option>
                <option value="105">
                    Government Estate
                </option>
                <option value="113">
                    Guindy
                </option>
                <option value="103">
                    High Court
                </option>
                <option value="145">
                    Kaladipet Metro
                </option>
                <option value="204">
                    Kilpauk
                </option>
                <option value="210">
                    Koyambedu
                </option>
                <option value="106">
                    LIC
                </option>
                <option value="112">
                    Little Mount
                </option>
                <option value="102">
                    Mannadi
                </option>
                <option value="116">
                    Meenambakkam
                </option>
                <option value="110">
                    Nandanam
                </option>
                <option value="115">
                    Nanganallur
                </option>
                <option value="203">
                    Nehru Park
                </option>
                <option value="147">
                    New Washermenpet Metro
                </option>
                <option value="205">
                    Pachaiyappa
                </option>
                <option value="104">
                    Puratchi Thalaivar Dr.M.G.Ramachandran Central Metro
                </option>
                <option value="211">
                    Puratchi Thalaivi Dr.J.Jayalaithaa CMBT Metro
                </option>
                <option value="111">
                    Saidapet Metro
                </option>
                <option value="206">
                    Shenoy Nagar
                </option>
                <option value="217">
                    St. Thomas Mount
                </option>
                <option value="109">
                    Teynampet
                </option>
                <option value="209">
                    Thirumangalam
                </option>
                <option value="143">
                    Thiruvotriyur Metro
                </option>
                <option value="144">
                    Thiruvottriyur Theradi Metro
                </option>
                <option value="149">
                    Thiyagaraya College Metro
                </option>
                <option value="107">
                    Thousand Light
                </option>
                <option value="146">
                    Tollgate Metro
                </option>
                <option value="148">
                    Tondiarpet Metro
                </option>
                <option value="213">
                    Vadapalani
                </option>
                <option value="101">
                    Washermenpet
                </option>
                <option value="141">
                    Wimco Nagar Depot Station
                </option>
                <option value="142">
                    Wimco Nagar Metro
                </option>
            </select>
            <Link to="/feedback">
                <Button variant="contained">Submit</Button>
            </Link>
        </div>
    )
}
export default Station;