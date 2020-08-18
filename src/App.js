/* eslint-disable react/prefer-stateless-function */
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import DisplayPannel from './component/DisplayPannel';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <div className="container-fuild">
        <DisplayPannel ref={this.inputRef} />
      </div>
    );
  }
}

export default App;
