import React from "react"
import {Link} from 'react-router-dom'



function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar_cont">
                <img className="nba_logo" src ="https://www.thestadiumbusiness.com/wp-content/uploads/2020/11/NBALogoCrop.png"></img>
                <Link to="/"><li><a>Home</a></li></Link>
                <Link to="/standings"><li><a>Standings</a></li></Link>
                <Link to="/myteams"><li><a>My Teams</a></li></Link>
        </div>
    </div>
    )
}

export default Navbar