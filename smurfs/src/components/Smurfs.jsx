import React from 'react';
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

const Div = Styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  padding: 20px;
  color: dodgerblue;
  text-align: center;
  margin: 10px;
  border: 1px solid black;
`
const Button = Styled.button`
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  background: dodgerblue;
  color: white;
  margin: 0 auto;
`
export const Smurfs = props => {
    console.log(props.deleteSmurf)
    return (
            <Div>
                <Route path={`/singlesmurf/${props.smurf.id}`} />
                <Link to={`/singlesmurf/${props.smurf.id}`}> <h3>{props.smurf.name}</h3> </Link>
                <strong>{props.smurf.height}</strong>
                <p>{props.smurf.age} smurf years old</p>
                <Button onClick={() => props.deleteSmurf(props.smurf.id)}>Kill</Button>
            </Div>
        
    )
}


