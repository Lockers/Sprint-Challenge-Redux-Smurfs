import React from 'react';
import Styled from 'styled-components'

const DIV = Styled.div`
    border: 1px solid red;
    border-radius: 50%;
    width: 30%;
`
export const Smurfs = props => {
    return (
        <DIV>
            <p>{props.smurf.name}</p>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            
        </DIV>
    )
}


