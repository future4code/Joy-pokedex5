/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';

import ButtonGoBack from "../../Components/ButtonGoBack";

import axios from "axios";

import { Card, Container, ContainerImg, ContainerDetail }  from "./Style";

export default function PokeIndex() {

  const [ pokemons, setPokemons ] = useState( [] );

useEffect(() => {

  axios.get(" https://pokeapi.co/api/v2/pokemon/")
  .then(({ data }) => {
    setPokemons(data.results);
  });

}, []);
 
  return(
    <Container>
      PokeIndex

      {
        pokemons.map(( pokemon ) => {

          return (

            <Card key={pokemon.name}>
              <ContainerImg>
                 img
              </ContainerImg>
              <ContainerDetail>
                <p>{(pokemon.name).toUpperCase()}</p>
              </ContainerDetail>
            </Card>
          )
        })
      }

      <ButtonGoBack>
        Voltar
      </ButtonGoBack>

    </Container>

  );
};