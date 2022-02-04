import React from 'react'

import { useNavigate } from 'react-router-dom';

export default function HomePage() {

  const navigate = useNavigate();

  const pagePokeIndex = () => {
    navigate("/PokeIndex");
  };

  const pagePokedex = () => {
    navigate("/Pokedex");
  };

  const pageDetails = () => {
    navigate("/Details");
  };
 
  return(
    <div>
      HomePage
        <></>
      <button onClick={pagePokeIndex}>Poke Index</button>
      <button onClick={pagePokedex}>Poke Dex</button>
      <button onClick={pageDetails}>Details</button>
      <center>
      <img height="1000px" alt="homepage" src="img/pageteste.png" />
      </center>
    </div>
  )
}