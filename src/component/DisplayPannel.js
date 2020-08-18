import React, { Component } from 'react';
import Number from './Number';

export default class DisplayPannel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNumber: 0,
      secNumber: 0,
      total: 0,
      activeNumber: 0

    };
  }
  setNumber = (number) => {
    this.setState({
        activeNumber: this.state.activeNumber*10+number,
    })
  }
  render() {
    return (
      <div className="row">
        <input className="col-12 border-0 p-3" placeholder="enter the number" value={this.state.activeNumber}/>
        <Number number={1} triggerParent={this.setNumber}/>
        <Number number={2} triggerParent={this.setNumber}/>
        <Number number={3} triggerParent={this.setNumber}/>
        <Number number={4} triggerParent={this.setNumber}/>
        <Number number={5} triggerParent={this.setNumber}/>
        <Number number={6} triggerParent={this.setNumber}/>
        <Number number={7} triggerParent={this.setNumber}/>
        <Number number={8} triggerParent={this.setNumber}/>
        <Number number={9} triggerParent={this.setNumber}/>
        <Number number={0} triggerParent={this.setNumber}/>
      </div>
    );
  }
}
