import React, { Component } from 'react';
import { dataStore, sortedDataStore } from './dataStore';
import './App.css';

class App extends Component {
  state = {
    value: '',
    function: '',
    result: ''
  }
  
  resetState () {
    this.setState({
      value: '',
      function: '',
      result: ''
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (this.state.function === 'linear') {
      this.linearSearch(parseInt(this.state.value));
    } else {
      this.binarySearch(parseInt(this.state.value));
    }
  }

  linearSearch (reqValue) {
    //var count defined so the final value of i can be accessed from outside the for loop
    // let reqValue = this.input.value;
    let count = 0;
    for(let i=0; i<dataStore.length; i++) {
      count++;
      if (dataStore[i] === reqValue) {
        // console('found')
        this.setState({
          result: `Your value was found after searching ${count} times`
        }) 
        return;
      }
    }
    return `Requested value is not found in the data (the search ran ${count} times)`;
  }

  binarySearch (reqValue, start, end, count=0) {
    count++;
    start = (start == null) ? 0 : start;
    end = (end == null) ? sortedDataStore.length - 1 : end;
    
    if (start > end) {
      this.setState({
        result: `Requested value is not found in the data (the search ran ${count} times)`
      })
      return;
    }

    let index = Math.floor((start + end)/2)
    let currItem = sortedDataStore[index]
    if (currItem === reqValue) {
      this.setState({
        result: `Your value was found after searching ${count} times`
      })
      return;
    } else if (reqValue > currItem) {
      return this.binarySearch(reqValue, index + 1, end, count);
    } else if (reqValue < currItem) {
      return this.binarySearch(reqValue, start, index-1, count);
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <form onSubmit={e => this.handleSubmit(e)}> 
            <label htmlFor='searchTerm'>Enter a number to search</label>
            <input type='text' id='searchTerm' value={this.state.value} onChange={e => this.setState({value: e.target.value})} required></input>
            <button type='submit' onClick={() => this.setState({function: 'linear'})}>Linear Search</button>
            <button type='submit' onClick={() => this.setState({function: 'binary'})}>Binary Search</button>
            <button type='reset' onClick={() => this.resetState()}>Reset</button>
          </form>
          <p className='result'>{this.state.result}</p>
        </main>
      </div>
    );
  }
}

export default App;
