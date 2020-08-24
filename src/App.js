/* eslint-disable max-len */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Display from './component/Display';
import ButtonPanel from './component/ButtonPanel';
import Calculate from './logic/calculate';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '\0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState(Calculate(this.state, name));
  }

  render() {
    return (
      <div className="grid">
        <Display result={this.state.total} />
        <ButtonPanel handleclick={this.handleClick} />
      </div>
    );
  }
}
