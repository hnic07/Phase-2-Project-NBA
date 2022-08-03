import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import TeamContainer from './TeamContainer';
import Header from "./Header"
import SearchBar from './SearchBar';
import StandingsContainer from './StandingsContainer';
import NewTeam from './NewTeam';


function App() {
const [teams, setTeams] = useState([])
const [search, setSearch] = useState("")


useEffect(() => {
fetch('http://localhost:3000/teams')
  .then(response => response.json())
  .then(teams => {
    setTeams(teams)
  })
},[])


const searchedTeams = teams.filter(team => team.name.toLowerCase().startsWith(search.toLowerCase()) || team.location.toLowerCase().startsWith(search.toLowerCase()))


  return (
    <div className="App">
        <Header/>
        <SearchBar search={search} setSearch={setSearch}/>
        <Switch>
        <Route exact path="/">
        <TeamContainer teams={teams} searchedTeams={searchedTeams}/>
        </Route>
        <Route exact path="/standings">
        <StandingsContainer teams={teams} />
        </Route>
        <Route exact path="/myteams">
        <NewTeam/>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
