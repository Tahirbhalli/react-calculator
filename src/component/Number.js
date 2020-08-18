/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
    };
  }

  render() {
    return (
      <button className="btn col-3" onClick={() => this.props.triggerParent(this.state.number)}>{this.state.number}</button>
    );
  }
}
