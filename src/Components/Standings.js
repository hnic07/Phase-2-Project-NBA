import React from "react";
import "../index.css"

function Standings({team}) {

const {location, name, record, conference, division} = team

return (
    
    <>
    
        <tr className="table_row_items">
            <td>{location} {name}</td>
            <td>{record}</td>
            <td>{conference}</td>
            <td>{division}</td>
        </tr>
    </>
    );
  }
    
  export default Standings;
