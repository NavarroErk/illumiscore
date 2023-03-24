import React, { useState } from "react";
import "./Test.css"

function Test() {

    const [keyValue, setKeyValue] = useState(' ')
    const [teamValue, setTeamValue] = useState(' ')

    function handleApiKeyChange(event) {
        setKeyValue(event.target.value)
    }
    function handleTeamChange(event) {
        setTeamValue(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(`API Key: ${keyValue}`); // do something with keyValue
        console.log(`Team: ${teamValue}`); // do something with teamValue
        setKeyValue('')
        setTeamValue('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="container">
                <h1>Test Page</h1>
                <label htmlFor="keyInput">Enter LIFX API Key</label>
                <input id="keyInput" name="keyInput" type="text" value={keyValue} onChange={handleApiKeyChange}/>
                <label htmlFor="teamInput">Enter Team Name</label>
                <input id="teamInput" name="teamInput" type="text" value={teamValue} onChange={handleTeamChange}/>
                <button>SUBMIT</button>
            </div>
        </form>
    )
}

export default Test;