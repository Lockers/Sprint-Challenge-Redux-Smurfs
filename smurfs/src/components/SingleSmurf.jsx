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
  width: auto
  height: 25px;
  justify-content: center;
  background: dodgerblue;
  color: white;
  margin: 0 auto;
`
const Form = Styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`
const Input = Styled.input`
  margin: 0 .25rem;
  min-width: 125px;
  border: 1px solid #dodgerblue;
  height: 20px
  border-radius: 10px;
  transition: border-color .5s ease-out;
  color: dodgerblue;
`
const Button1 = Styled(Button)`
    background: white;
    color: dodgerblue;
    margin: 10px auto;
    width: 50px;
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
            <Div>
            <h3>{props.smurf.name}</h3>
                <strong>{props.smurf.age} smurf years old</strong>
            <p>{props.smurf.height} Cm Tall </p>
            <Button onClick={() => props.deleteSmurf(props.smurf.id)}>x</Button>
            </Div>
            <Form onSubmit={eventHandler}>
                <Input
                    type='text'
                    name='name'
                // value={props.smurf.name}
                />
                <Input
                    type='number'
                    name='age'
                // value={props.smurf.age}
                />
                <Input
                    type='text'
                    name='height'
                // value={props.smurf.height}
                />
                <Button1>Update</Button1>
            </Form>
        </div>
    )
}

