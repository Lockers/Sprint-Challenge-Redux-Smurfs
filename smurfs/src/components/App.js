import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurfs, newSmurfy, deleteSmurf, updateSmurf } from '../actions/index'
import { Smurfs } from './Smurfs'
import { Route } from 'react-router'
import Styled from 'styled-components'
import { SingleSmurf } from './SingleSmurf'
import { Link } from 'react-router-dom'

const H1 = Styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  color: dodgerblue;
`
const Div = Styled.div`
  display: flex;
  border: solid black;
  flex-wrap: wrap;
  background: dodgerblue;
  color: white;
  justify-content: center;
`
const Form = Styled.form`
  height: auto;
  display: flex;
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
const Button = Styled.button`
  display: flex;
  width: auto
  height: 25px;
  justify-content: center;
  background: dodgerblue;
  color: white;
`

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  changeHandler = (e) => {
    e.preventDefault()
    const name = e.target['name'];
    const age = e.target['age'];
    const height = e.target['height'];
    
    const newSmurf = {
      name: name.value,
      age: age.value,
      height: height.value
    }
    console.log(newSmurf)
    this.props.addSmurfs(newSmurf)
    
  }

  render() {
    
    if (this.props.fetchingSmurfs) {
      return <h2>Fetching yow Smurfs</h2>
    }
    return (
      <div>
        <Link to='/'><H1>Back To Smurf village</H1>
        </Link>
        <div>
          <H1>Add a blue guy</H1>
          <Form onSubmit={this.changeHandler}>
              <Input
                type='text'
                name='name'
              />
              <Input
                  type='number'
                  name='age'
              />
              <Input
                 type='number'
                 name='height'
              />
              <Button>ADD</Button>
            </Form>
          </div>
        <Div>
          {
            this.props.smurfs.map(smurf => <Route exact path={`/singlesmurf/${smurf.id}`} render={(props) => <SingleSmurf {...props} smurf={smurf} key={smurf.id} updateSmurf={this.props.updateSmurf} deleteSmurf={this.props.deleteSmurf} />} />)
          }
          {
              this.props.smurfs.map(smurf => {
                return <Route exact path='/' render={(props) => <Smurfs smurf={smurf} key={smurf.id} deleteSmurf={this.props.deleteSmurf} updateSmurf={this.props.updateSmurf} {...props} />}/>
            })
          }
          </Div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    deletingSmurf: state.deletingSmurf
  };
}

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurfs, deleteSmurf, updateSmurf },
)(App);
