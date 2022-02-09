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

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(({data})=>{
      
        const getListPokemon = data.results

        getListPokemon.forEach((poke) => {
          axios.get(`${poke.url}`).then(({data})=>{
            setPokemons([data])
          }).catch((err)=>{
            console.log(err.message)
          })        
        });

      }).catch((err)=>{
        console.log(err.message)
      })

  }, [])

  const navigate = useNavigate()

  const pagePokedex = () => {
    navigate('/Pokedex')
  }

  const pageDetails = () => {
    navigate('/Details')
  }

  const newPokemonList = pokemons.map((pokemon)=>{
    console.log(pokemon)
    return (
      <Card key={pokemon && pokemon.id}>
        <ContainerImg>
          <ButtonAdd>
            <button>Adicionar</button>
          </ButtonAdd>
          <ButtonDetails>
            <button onClick={pageDetails}>Detalhes</button>
          </ButtonDetails>
          <ImgPokeTest>
            <Bluur>
              <img src={pokemon && pokemon.sprites.versions["generation-v"]["black-white"]
              .animated.front_default} />
            </Bluur>
          </ImgPokeTest>
          <ContainerName>
            <p>{pokemon.name.toUpperCase()}</p>
          </ContainerName>
        </ContainerImg>
      </Card>
    )
    

  })

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

      {newPokemonList}

    </Container>
  )
}
