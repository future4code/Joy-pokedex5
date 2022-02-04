import styled from "styled-components";

export const Container = styled.div`

color: white;
display: flex;
flex-direction: column;
align-items: center;
background: black;
`;

export const Card = styled.div`

display: flex;

border: 1px solid red;
border-radius: 10px;
height: 20vh;
width: 80%;
margin-top: 15px;

/* #element {
    mix-blend-mode: darken;
} */
`;

export const ContainerImg = styled.div`

width: 40%;
border: 1px solid red;
`;

export const ContainerDetail = styled.div`

display: flex;
justify-content: center;

width: 60%;
border: 1px solid green;
font-weight: bold;
`;