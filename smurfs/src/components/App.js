import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurfs, newSmurfy, deleteSmurf, updateSmurf } from '../actions/index'
import { Smurfs } from './Smurfs'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    
    if (this.props.fetchingSmurfs) {
      return <h2>Fetching yow Smurfs</h2>
    }
    return (
      <div className="App">
        <button onClick={() => this.props.addSmurfs(newSmurfy)}></button>
        {
            this.props.smurfs.map(smurf => {
              return <Smurfs smurf={smurf} key={smurf.id}/>
          })
        }
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
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
