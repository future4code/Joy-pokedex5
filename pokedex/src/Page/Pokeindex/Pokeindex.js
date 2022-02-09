/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'

import { BASE_URL2 } from '../../Components/URLs/BASE_URL'

import poke from './img/pokedex.png'

import { useNavigate } from 'react-router-dom'

import ButtonGoBack from '../../Components/ButtonGoBack'

import axios from 'axios'

import {
  Card,
  Container,
  ContainerImg,
  ContainerName,
  ImgPokeTest,
  ButtonAdd,
  ButtonDetails,
  Bluur,
  Pokedex,
  Header,
  HeaderLButton,
  HeaderRButton
} from './Style'

export default function PokeIndex() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL2}`).then(({ data }) => {setPokemons(data.results)})
  }, [])

  const navigate = useNavigate()

  const pagePokedex = () => {
    navigate('/Pokedex')
  }

  const pageDetails = () => {
    navigate('/Details')
  }

  return (
    <Container>
      <Header>
        <HeaderLButton className='button'>
          <ButtonGoBack>Voltar</ButtonGoBack>
        </HeaderLButton>
        <Pokedex src="./img/pokemons.png" />
        <HeaderRButton>
          <button className='button' onClick={pagePokedex}>Pokedéx</button>
        </HeaderRButton>
        
      </Header>

      {pokemons.map(pokemon => {
        return (
          <Card key={pokemon.name}>
            <ContainerImg>
              <ButtonAdd>
                <button>Adicionar</button>
              </ButtonAdd>
              <ButtonDetails>
                <button onClick={pageDetails}>Detalhes</button>
              </ButtonDetails>
              <ImgPokeTest>
                <Bluur>
                  <img src={poke} alt="Imagem"/>
                </Bluur>
              </ImgPokeTest>
              <ContainerName>
                <p>{pokemon.name.toUpperCase()}</p>
              </ContainerName>
            </ContainerImg>
          </Card>
        )
      })}
    </Container>
  )
}
