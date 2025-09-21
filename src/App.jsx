import { Suspense, useState } from 'react'
import './App.css'

import Navbar from './Components/navbar/Navbar';
import AvailablePlayer from './Components/AvailablePlayer/AvailablePlayer';
import SlectedPlayer from './Components/SelectedPlayer/SlectedPlayer';
const playerLoad= async ()=>{
  const res= await fetch("/Players.json")
  return res.json()
}
const playerPromise=playerLoad()

function App() {
const [selectToggole, SetToggole]=useState(true)

  return (
    <>
      <Navbar></Navbar>

      <Suspense 
        fallback={<span className="loading loading-spinner text-error text-center "></span>}
      >
        <AvailablePlayer  playerPromise={playerPromise}></AvailablePlayer>
      </Suspense>
      <SlectedPlayer></SlectedPlayer>
      
    </>
  );
}

export default App
