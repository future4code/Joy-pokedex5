/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'

import { BASE_URL, BASE_URLIMG } from '../../Components/URLs/BASE_URL';

import axios from "axios"

import poke from './img/pokedex.png'

import { useRequestpokes } from "../../Hooks/UseRequestpokes";

import { useNavigate } from 'react-router-dom'

import ButtonGoBack from '../../Components/ButtonGoBack'

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

  const navigate = useNavigate()

  const [ pokemons, isLoading, error ] =  useRequestpokes( `${BASE_URL}`, [] );

  const pagePokedex = () => {
    navigate('/Pokedex')
  };

  const pageDetails = () => {
    navigate('/Details')
  };

  const  renderPokemonList = pokemons.map(( pokemon, i ) =>{

    return (
      <Card key={ i }>

        <ContainerImg>

          <ButtonAdd>
            <button>Adicionar</button>
          </ButtonAdd>

          <ButtonDetails>
            <button onClick={pageDetails}>Detalhes</button>
          </ButtonDetails>

          <ImgPokeTest>
            <Bluur>
              <img src={ `${BASE_URLIMG}/${i + 1}.gif` } lazy="Loading" />
            </Bluur>
          </ImgPokeTest>

          <ContainerName>
            <p>{pokemon.name.toUpperCase()}</p>
          </ContainerName>

        </ContainerImg>
      </Card>
    );
  });

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

 
      { isLoading && ( <p>Loading...</p> ) }

      { !isLoading && error && <p>Ocorreu algúm erro desculpe.</p> }

      { !isLoading && renderPokemonList && renderPokemonList.length > 0 && renderPokemonList}

    </Container>
  );
};
