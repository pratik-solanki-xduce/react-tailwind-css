import bmw from './images/bmw.jpg'
import './App.css';
import { useState } from 'react';
import btnModule from "./Button.module.css"
import { FAQs } from './FAQ';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [modal, setModal] = useState(false)

  const displayData = () => {
    alert("Welcome")
  }

  const showData = (name) => {
    // alert(`Welcome ${name}`)
    NotificationManager.info(`Welcome ${name}`);
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <NotificationContainer/>

      <button className='enquire border-2 border-black bg-sky-500/100' onClick={() => setModal(true)}>Enquire Now</button>
      <div onClick={() => setModal(false)} className={`modalOverlay ${modal ? "modalShow" : ""}`}></div>
      <div className={`modalDiv ${modal ? "showModalDiv" : ""}`}>
        <h3 className='text-2xl font-semibold'>Enquiry Form  <button onClick={() => setModal(false)}><span>&times;</span></button></h3>
      </div>

      <button className='micon border-2 border-black' onClick={() => setShowMenu(!showMenu)}>{showMenu ? <span>&times;</span> : <span>&#9776;</span>}</button>
      <div className={`menu ${showMenu ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Carrer</li>
          <li>Contact</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
      <h1 className="text-2xl font-bold">
        Count {count}
      </h1>
      <div className='mt-5 mb-5'>
        <button className={`${btnModule.warning} p-[10px] text-lg font-bold mr-5`} onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Image</button>
        <button className={`${btnModule.error} p-[10px] text-lg font-bold mr-5`} onClick={() => showData("Pratik")}>Show Alert with Name</button>
        <button className={`${btnModule.error} p-[10px] text-lg font-bold mr-5`} onClick={displayData}>Display Alert</button>
        <button className={`${btnModule.success} p-[10px] text-lg font-bold mr-5`} onClick={increaseCount}>Increase Count</button>
        <button className={`${btnModule.error} p-[10px] text-lg font-bold`} onClick={() => setCount(0)}>Reset Count</button>
      </div>
      {show ? <img src={bmw} alt="bmw" /> : null}

      <div className='mt-5'>
        <input className='border-2 border-black' defaultValue="p@ssword" type={showPassword ? "text" : "password"} /> <button className='border-2 border-black' onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>
      </div>

      <FAQs />

    </div>
  );
}

export default App;
