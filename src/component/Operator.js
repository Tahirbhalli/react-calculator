/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

export default class Operator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: this.props.operator,
    };
  }

  render() {
    return (
      <button className="btn col-3" onClick={() => this.props.triggerParent(this.props.operator)}>{this.state.operator}</button>
    );
  }
}
