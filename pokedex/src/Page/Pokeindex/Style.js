import styled from "styled-components";

export const Container = styled.div`

color: white;
display: flex;
flex-direction: column;
align-items: center;
background: black;
`;

export const Header = styled.div`
display: flex;
justify-content: space-between;
`

export const Pokedex = styled.img`
height: 7vh;
margin: 5px;
`

export const Card = styled.div`

display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #ff;
height: 50vh;
width: 60%;
margin-top: 15px;
box-shadow: 0px 0px 10px 2px rgba( 250, 250, 250, 0.6 );
backdrop-filter: blur( 90px );
-webkit-backdrop-filter: blur( 4px );
border-radius:10px;
margin-bottom: 20px;
`;

export const ContainerImg = styled.div`
display: flex;
-webkit-animation: rotate-anime 3s linear infinite;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 50%;
border-radius:10px;
`;

export const ContainerName = styled.div`

display: flex;
justify-content: center;
margin-top: 10px;
width: 60%;
font-weight: bold;
border-radius:10px;
`;

export const ImgPokeTest = styled.div`
display: flex;
justify-content: center;
width: 80%;
img{
    width: 80%;
}
`;

export const Bluur = styled.div`
display: flex;
justify-content: center;

box-shadow: inset 10px 10px 10px green, 1px 1px 1em #00FF00;

margin-top: 15px;
height:100px;
width: 100px;
border-radius:50%;
margin-bottom: 20px;
}`

export const ButtonAdd = styled.div`
position: fixed;
margin-top: 5px;
margin-left: 4px;
top:0;
left:0;

button {
 background-color: rgb(192,192,192);
 border: 1px solid rgb(0, 0, 0);
 padding: 2px 7px;
 border-radius: 100px;
 transition: .3s;
 color: #000;
 cursor:pointer;
}

button:hover {
 border: 1px solid #fff;
 background-color: transparent;
 color: #fff;
}
`
export const ButtonDetails = styled.div`
position: fixed;
margin-top: 5px;
margin-right: 4px;
padding: 1px 1px;
top:0;
right:0;

button {
 background-color: rgb(192,192,192);
 border: 1px solid rgb(0, 0, 0);
 padding: 2px 7px;
 border-radius: 100px;
 transition: .3s;
 color: #000;
 cursor:pointer;
}

button:hover {
 border: 1px solid #fff;
 background-color: transparent;
 color: #fff;
}
`

export const HeaderLButton = styled.div`
width: 10%;
position: fixed;
margin-top: 5px;
margin-left: 4px;
top: 30px;
left: 15px;
`
export const HeaderRButton = styled.div`
width: 10%;
position: fixed;
margin-top: 5px;
margin-right: 4px;
top: 35px;
right: 40px;

button {
 background-color: rgb(192,192,192);
 border: 1px solid rgb(0, 0, 0);
 padding: 2px 7px;
 border-radius: 100px;
 transition: .3s;
 color: #000;
 cursor:pointer;
}
button:hover {
 border: 1px solid #fff;
 background-color: transparent;
 color: #fff;
}
`