import React from 'react'
import Styled from 'styled-components'

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
const Form = Styled.form`
    display: flex;
    flex-direction: column;
`

export const SingleSmurf = props => {
    const eventHandler = (event) => {
        event.preventDefault()
        const name = event.target['name'];
        const age = event.target['age'];
        const height = event.target['height'];

        const updateSmurf = {
            name: name.value,
            age: age.value,
            height: height.value
        }
        console.log(updateSmurf)
        props.updateSmurf(props.smurf.id, updateSmurf)
    }
    return (
        <div>
            <Form onSubmit={eventHandler}>
                <input
                    type='text'
                    name='name'
                    // value={props.smurf.name}
                />
                <input
                    type='number'
                    name='age'
                    // value={props.smurf.age}
                />
                <input
                    type='text'
                    name='height'
                    // value={props.smurf.height}
                />
                <button>Update</button>
            </Form>
            <Div>
            <h3>{props.smurf.name}</h3>
                <strong>{props.smurf.age} smurf years old</strong>
            <p>{props.smurf.height} Cm Tall </p>
            <Button onClick={() => props.deleteSmurf(props.smurf.id)}>X</Button>
            </Div>
        </div>
    )
}

