import React from 'react';
import './App.css';
import Display from './component/Display';
import ButtonPanel from './component/ButtonPanel';

function App() {
  return (
    <div className="grid">
      <Display value="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
