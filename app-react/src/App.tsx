import React from 'react';
import logo from './logo.svg';

function App() {
  const [count, setCount] = React.useState(0);

  const add = () => {
    setCount(count + 1);
  }

  const subtract = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <div style={{maxWidth: '400px'}}>
        <poc-card text="Stencil Component">
          <div style={{display: 'flex', }}>
            <poc-button onClick={() => add()} text="+" appearance="primary" />
            <poc-input placeholder="0" value={count}/>
            <poc-button onClick={() => subtract()} text="-" appearance="primary" />
          </div>
        </poc-card>
      </div>
    </div>
  );
}

export default App;
