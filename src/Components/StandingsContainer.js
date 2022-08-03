import React, {useState} from "react"
import Standings from "./Standings"


function StandingsContainer({teams}) {

const [conference, setConference] = useState("All")
const [division, setDivision] = useState("All")

const filteredTeams = teams.filter(team => {
    if (conference === "All") {
        return true
    } 
    return team.conference === conference
})

const standingTeams = filteredTeams.filter(team => {
    if (division === "All") {
        return true
    } 
    return team.division === division
})

const displayTeams = standingTeams.map(team => {
        return <Standings key={team.id} team={team} />})
    



return (
    <main>
        <div className="Filter">
        <select className="filter_conf" value={conference} onChange={(e) => setConference(e.target.value)} >
            <option value="All">Filter by Conference:</option>
            <option value="Eastern">Eastern</option>
            <option value="Western">Western</option>
        </select>
        <select className="filter_div" value={division} onChange={(e) => setDivision(e.target.value)} >
            <option value="All">Filter by Division:</option>
            <option value="SouthEast">SouthEast</option>
            <option value="Atlantic">Atlantic</option>
            <option value="Central">Central</option>
            <option value="NorthWest">NorthWest</option>
            <option value="SouthWest">SouthWest</option>
            <option value="Pacific">Pacific</option>
        </select>
        </div>
        <div className="header_table">2022 NBA Standings:</div>
        <p></p>
        <table className="table">
        <tr className="table_header">
            <th>Team</th>
            <th>Record</th>
            <th>Conference</th>
            <th>Division</th>

        </tr>
        
          {displayTeams}
          
        </table>
    
    </main>
)}



export default StandingsContainer