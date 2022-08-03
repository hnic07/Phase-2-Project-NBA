import React, { useEffect, useState} from 'react'

function NewTeam() {

    const [teams, setTeams] = useState([]) //is this ALL of the frome the JSON DB?
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [logo, setLogo] = useState("")


    useEffect(() => {
        fetch('http://localhost:3000/newteam')
        .then(res => res.json())
        .then(data => setTeams(data))

},[])

const formSubmit = (e) => {
    e.preventDefault();

    const team = {
        name: name,
        location: location,
        logo: logo,
    }
    addNewTeam(team)


}

const addNewTeam= newTeam => {
    fetch("http://localhost:3000/newteam",{
    method: 'POST',
    headers: {'Content-Type' : "application/json"},
    body: JSON.stringify(newTeam)
})
.then (res => res.json())
.then (newData => setTeams([...teams, newData]))
}

return(
    <div>
    <h1 className="team_title_header">Let's create a new NBA team!</h1>
        <h3 className="subtext">You can create your own team by chosing a name, a location, and an image for your logo. Click the submit button to show your team! </h3>
        <form onSubmit={formSubmit}>
            <input className="team_input_name" placeholder='Your Team Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="team_input_location" placeholder='Your Team Location' onChange={(e) => setLocation(e.target.value)}/>
            <input className="team_input_logo"placeholder='Your Team Logo' onChange={(e) => setLogo(e.target.value)}/>
            <button className="submit_button" type="submit">Submit Team</button>
        </form>
        {teams.map((team) => {
            return ( 
                
                <div className="team_card" key={team.id}>
                    <img className="team_image" src ={team.logo} alt={team.name}/>
                    <div className="team_details">
                        <h1>{team.name}</h1>
                        <h2>{team.location}</h2>
                    </div>
                </div>
            )
        })}
    </div>
)
}

export default NewTeam