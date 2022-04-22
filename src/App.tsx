// import React from 'react'; // Al trabajar con Ts no es necesario importar React
import './App.css';
import { CounterDummy } from './components/useContext';
import { ContextProvider } from './components/useContext/context/context';
import { CustomHooks } from './components/useCustomHook';
import { Chronometer } from './components/useEffect';
import { CounterWithReduce } from './components/userReducer';
import { Counter, Items } from './components/useState';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome Typescript</h1>
        <Counter />
        <br />
        <Items />
        <br />
        <Chronometer />
        <br />
        <CounterWithReduce />
        <br />
        <CustomHooks />
        <br />
        <ContextProvider>
          <CounterDummy />
        </ContextProvider>
        <br />
      </div>
    </div>
  );
}

export default App; 
