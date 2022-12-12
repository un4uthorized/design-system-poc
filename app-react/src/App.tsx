import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [lit, setLit] = React.useState(0);

  
  return (
    <div className='app'>
      <div style={{maxWidth: '400px'}}>
        <poc-card text="Stencil Component">
          <div style={{display: 'flex', }}>
            <poc-button onClick={() => setCount(count + 1)} text="+" appearance="primary" />
            <poc-input placeholder="0" value={count}/>
            <poc-button onClick={() => setCount(count - 1)} text="-" appearance="primary" />
          </div>
        </poc-card>
      </div>

      <div style={{maxWidth: '400px'}}>
        <lit-card text="Lit Component">
          <div style={{display: 'flex', }}>
            <lit-button onClick={() => setLit(lit + 1)} text="+" appearance="primary"></lit-button>
            <lit-input placeholder="0" value={lit}></lit-input>
            <lit-button onClick={() => setLit(lit - 1)} text="-" appearance="primary"></lit-button>
          </div>
        </lit-card>
      </div>
    </div>
  );
}

export default App;
