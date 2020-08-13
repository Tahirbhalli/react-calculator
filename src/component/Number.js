/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: this.props.number,
    };
  }

  render() {
    return (
      <div className="col-3 btn bg-success text-white">{this.state.numbers}</div>
    );
  }
}
