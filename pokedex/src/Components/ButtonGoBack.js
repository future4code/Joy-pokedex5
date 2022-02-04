import React from 'react';

import { useNavigate } from 'react-router-dom';

const ButtonGoBack = ({ children }) => {

    const navigate = useNavigate();

    return (

        <button onClick={ () =>  navigate( - 1 ) }>
            { children }            
        </button>
        
    );
};

export default ButtonGoBack;