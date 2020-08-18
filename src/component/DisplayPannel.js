import React, { Component } from 'react';
import Number from './Number';
import Operator from './Operator';

export default class DisplayPannel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNumber: 0,
      secNumber: 0,
      total: 0,
      activeNumber: '0',
      operator: null,
    };
  }
  setOperator = (op) => {
    if(this.state.secNumber === 0 && this.state.firstNumber !== 0) {
      this.setState({
        operator: op,
      },()=>this.setState({
        activeNumber: this.state.firstNumber + this.state.operator,
      }))
    } else {
        // set opertion
        console.log('set the operation')
    }
  }
  setNumber = (number) => {
    if(this.state.operator === null){
      this.setState({
        activeNumber: this.state.firstNumber*10+number,
        firstNumber: this.state.firstNumber*10+number,
      })
    } else {
        this.setState({
          secNumber: this.state.secNumber*10+number,
        },()=>this.setState({
            activeNumber: this.state.firstNumber + this.state.operator + this.state.secNumber,
        }))
    }
    
  }
  render() {
    return (
      <div className="row">
        <input className="col-12 border-0 p-3" type="text" placeholder="enter the number" value={this.state.activeNumber}/>
        <Number number={1} triggerParent={this.setNumber}/>
        <Number number={2} triggerParent={this.setNumber}/>
        <Number number={3} triggerParent={this.setNumber}/>
        <Operator operator='+' triggerParent={this.setOperator}/>
        <Number number={4} triggerParent={this.setNumber}/>
        <Number number={5} triggerParent={this.setNumber}/>
        <Number number={6} triggerParent={this.setNumber}/>
        <Operator operator='-' triggerParent={this.setOperator}/>
        <Number number={7} triggerParent={this.setNumber}/>
        <Number number={8} triggerParent={this.setNumber}/>
        <Number number={9} triggerParent={this.setNumber}/>
        <Number number={0} triggerParent={this.setNumber}/>
      </div>
    );
  }
}
