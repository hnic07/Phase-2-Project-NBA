import React, {useState} from 'react'



function TeamCard({team}) {
const {name, location, logo, conference, division, record, coach, stadium, bio} = team

const [bioL, setBio] = useState(true)

  function handleClick(){
    setBio(!bioL)
  }

return (
  <li className="cards__item">
    <div className="card">
      <img className="card__image"
        src={logo}
        alt={name}
        
      />
      <div className="card__content">
        <div className="card__title">{location} {name} </div>
        {bioL?<p className="card__text">{bio}</p> :<img className="stadium__image" src={stadium}/>}
       
        
        <div className="card__detail">
          <p>Conference : {conference} || Division : {division} </p>
          <p>Head Coach : {coach} </p>
            {
              <button className="button_arena" onClick={handleClick}> Show Team Arena</button>
            }
        
        </div>
      </div>
    </div>
  </li>
);
}

export default TeamCard