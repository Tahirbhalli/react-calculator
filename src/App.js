import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Number from './component/Number';

function App() {
  return (
    <div>
      <div className="container row">
        <Number number="0" />
        <Number number="1" />
        <Number number="2" />
        <Number number="3" />
        <Number number="4" />
        <Number number="5" />
        <Number number="6" />
        <Number number="7" />
        <Number number="8" />
        <Number number="9" />
      </div>
    </div>
  );
}

export default App;
