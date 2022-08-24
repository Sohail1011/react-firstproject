import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
const useContador = inicio => {
  const [contador, setContador] = useState(inicio)
  const incremento = () => {
    setContador(contador + 1)
  }
  return { contador, incremento }
}
function App() {
  const { contador, incremento } = useContador(0)
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {contador}
        </p>
        <button onClick={incremento}>Incrementar contador</button>
      </header>
    </div>
  );
}
export default App;
