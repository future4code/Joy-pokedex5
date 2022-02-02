import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Homepage/Homepage'
import Pokeindex from '../src/Page/Pokeindex/Pokeindex'
import Pokedex from '../src/Page/Pokedex/Pokedex'
import Details from '../src/Page/Details/Details'
import GlobalStyle from './Components/GlobalStyle'

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
        
          <Route path={'/Pokeindex'} element={<Pokeindex />} />
        
          <Route path={'/Pokedex'} element={<Pokedex />} />
       
          <Route path={'/Detail'} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
