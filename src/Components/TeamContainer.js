import React from "react";
import TeamCard from "./TeamCard";


function TeamContainer({teams, searchedTeams}) {

const nbaTeams = searchedTeams.map(team => {
    return <TeamCard key={team.id} team={team}/>
})



return(
    <main>
        <ul className="cards">
            {nbaTeams}
        </ul>
    </main>
)}



export default TeamContainer