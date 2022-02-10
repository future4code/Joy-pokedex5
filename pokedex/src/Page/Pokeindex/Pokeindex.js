/* eslint-disable array-callback-return */
import React from 'react'

import { BASE_URL, BASE_URLIMG } from '../../Components/URLs/BASE_URL'

import { useRequestpokes } from '../../Hooks/UseRequestpokes'

import { useNavigate } from 'react-router-dom'

import ButtonGoBack from '../../Components/ButtonGoBack'

import {
  Card,
  Container,
  ContainerImg,
  ContainerName,
  ImgPoke,
  ButtonAdd,
  ButtonDetails,
  Bluur,
  Pokedex,
  Header,
  HeaderButton
} from './Style'

export default function PokeIndex() {
  const navigate = useNavigate()

  const [pokemons, isLoading, error] = useRequestpokes(`${BASE_URL}`, [])

  const pagePokedex = () => {
    navigate('/Pokedex')
  }

  const pageDetails = () => {
    navigate('/Details')
  }

  const renderPokemonList = pokemons.map((pokemon, i) => {
    return (
      <Card key={i} className="main">
        <ContainerImg>
          <ButtonAdd>
            <button>Adicionar</button>
          </ButtonAdd>

          <ButtonDetails>
            <button onClick={pageDetails}>Detalhes</button>
          </ButtonDetails>

          <ImgPoke>
            <Bluur>
              <img
                alt="Imagens dos Pokemons"
                src={`${BASE_URLIMG}/${i + 1}.gif`}
                lazy="Loading"
              />
            </Bluur>
          </ImgPoke>
   
          <ContainerName>
            <p>{pokemon.name.toUpperCase()}</p>
          </ContainerName>
        </ContainerImg>
      </Card>
    )
  })

  return (
    <>
      <Header>
        <Pokedex className="header" src="./img/pokemons.png" />
          <HeaderButton className="back">
            <ButtonGoBack>Voltar</ButtonGoBack>
          </HeaderButton>
        <div></div>
        <HeaderButton className="pokedex">
          <button onClick={pagePokedex} >
            Pokedéx
          </button>
        </HeaderButton>
      </Header>

      <Container>
        {isLoading && <p>Loading...</p>}

        {!isLoading && error && <p>Ocorreu algúm erro desculpe.</p>}

        {!isLoading &&
          renderPokemonList &&
          renderPokemonList.length > 0 &&
          renderPokemonList}
      </Container>
    </>
  )
}
