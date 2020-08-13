/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import Number from './component/Number';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      total: 0,
    };
  }

  getnumber = (number)=> {
    this.setState({
      first: number,
    });
    console.log(this.state.first);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <input type="number" id="1" name="" placeholder="Enter number" />
        </div>

        <div className="container row">
          <Number number="0" set={this.getnumber} />
          {/* <Number number="1" />
          <Number number="2" />
          <Number number="3" />
          <Number number="4" />
          <Number number="5" />
          <Number number="6" />
          <Number number="7" />
          <Number number="8" />
          <Number number="9" /> */}
        </div>
      </div>
    );
  }
}

export default App;
