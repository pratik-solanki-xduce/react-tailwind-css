import bmw from './images/bmw.jpg'
import './App.css';
import { useState } from 'react';
import btnModule from "./Button.module.css"

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  const displayData = () => {
    alert("Welcome")
  }

  const showData = (name) => {
    alert(`Welcome ${name}`)
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h1 className="text-3xl font-bold underline">
        Count {count}
      </h1>
      <div className='mt-5 mb-5'>
        <button class={`${btnModule.warning} p-[10px] text-lg font-bold mr-5`} onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Image</button>
        <button class={`${btnModule.error} p-[10px] text-lg font-bold mr-5`} onClick={() => showData("Pratik")}>Show</button>
        <button class={`${btnModule.error} p-[10px] text-lg font-bold mr-5`} onClick={displayData}>Display</button>
        <button class={`${btnModule.success} p-[10px] text-lg font-bold mr-5`} onClick={increaseCount}>Increase Count</button>
        <button class={`${btnModule.error} p-[10px] text-lg font-bold`} onClick={() => setCount(0)}>Reset Count</button>
      </div>
      {show ? <img src={bmw} alt="bmw" /> : null}
    </div>
  );
}

export default App;
