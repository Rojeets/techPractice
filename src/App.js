// import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import { useState } from 'react';
import Counters from './components/counters';

function App() {
  const [count, setCount] = useState(0);
  const increamentCounter =()=>{if(count<20 ){ setCount(count+1)}};
  const decreamentCounter = ()=>{if(count>0){ setCount(count-1)}};

  return (
    <>
      <Welcome  />
      <Counters increamentCounter ={increamentCounter} decreamentCounter={decreamentCounter} count={count}/>
    </>
  );
}

export default App;
