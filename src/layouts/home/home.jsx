import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const Home = () => {

    const [ pokemon, setPokemon ] = useState('')
    const navigate = useNavigate()

    const goToDetails = (e) => {
        e.preventDefault()
        navigate(`pokemon/${pokemon}`)
    }

    return(
        <div className="App">
        <form onSubmit={(e)=>goToDetails(e)}>
          <input
            type="text"
            value={pokemon}
            placeholder="Enter Pokemon Name"
            onChange={(event)=>setPokemon(event.target.value)}
          />
          <br />
          <button type="submit" disabled={pokemon.length === 0}>Search</button>
        </form>
      </div>
    )
}

export default Home;