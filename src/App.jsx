import { Suspense, useState } from "react";
import "./App.css";

import Navbar from "./Components/navbar/Navbar";
import AvailablePlayer from "./Components/AvailablePlayer/AvailablePlayer";
import SlectedPlayer from "./Components/SelectedPlayer/SlectedPlayer";
const playerLoad = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};
const playerPromise = playerLoad();

function App() {
  const [selectToggole, SetToggole] = useState(true);
  const [availableBanlance, setBalance] = useState(600000);
  return (
    <>
      <Navbar availableBanlance={availableBanlance}></Navbar>
      {/* Availabe button and slect on availabe toggole here */}
      <div className="flex justify-between items-center max-w-[1280px] mx-auto">
        <h1 className="font-extrabold text-2xl">Available Players</h1>
        <div>
          <button
            onClick={() => SetToggole(true)}
            className={`py-3 px-4 font-bold border-1 border-gray-300 rounded-l-2xl border-r-0 ${
              selectToggole === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Aailabe
          </button>
          <button
            onClick={() => SetToggole(false)}
            className={`py-3 px-4 font-bold border-1 border-gray-300 rounded-r-2xl border-l-0  ${
              selectToggole === false ? "bg-[#E7FE29]" : ""
            } `}
          >
            Selected
          </button>
        </div>
      </div>
      {selectToggole ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner text-error text-center "></span>
          }
        >
          <AvailablePlayer
            playerPromise={playerPromise}
            setBalance={setBalance}
          ></AvailablePlayer>
        </Suspense>
      ) : (
        <SlectedPlayer></SlectedPlayer>
      )}
    </>
  );
}

export default App;
