import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurfs, newSmurfy, deleteSmurf, updateSmurf } from '../actions/index'
import { Smurfs } from './Smurfs'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  changeHandler = (e) => {
    e.preventDefault()
    console.log('event handler firing')
    let name = e.target['name'];
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
      <div>
      <form onSubmit={this.changeHandler}>
        <input
              type='text'
              name='name'
        />
        <input
              type='number'
              name='age'
        />
        <input
              type='text'
              name='height'
            />
            <button>ADD</button>
        </form>
      </div>
      <div className="App">
        <button onClick={() => this.props.deleteSmurf(1)}></button>
        {
            this.props.smurfs.map(smurf => {
              return <Smurfs smurf={smurf} key={smurf.id} />
          })
        }
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  };
}

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurfs, deleteSmurf, updateSmurf },
)(App);
