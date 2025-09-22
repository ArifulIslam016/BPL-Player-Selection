import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/navbar/Navbar";
import AvailablePlayer from "./Components/AvailablePlayer/AvailablePlayer";
import SlectedPlayer from "./Components/SelectedPlayer/SlectedPlayer";
const playerLoad = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};
const playerPromise = playerLoad();

function App() {
  // const [isSelected, setisSelected] = useState(false);
  const [selectToggole, SetToggole] = useState(true);
  const [availableBanlance, setBalance] = useState(1000000);
  const [selectedPlayer, setSelectedPlayer]=useState([])
 const removePlayer=(player)=>{
const leftSelectedPlayer=selectedPlayer.filter(p=> p.name!==player.name)
setSelectedPlayer(leftSelectedPlayer)
setBalance(prev=> prev+parseInt(
      player.price.split("USD").join().split(",").join("")))
 }
  
  return (
    <>
      <Navbar availableBanlance={availableBanlance}></Navbar>
      {/* Availabe button and slect on availabe toggole here */}
      <div className="flex justify-between items-center max-w-[1280px] mx-auto">
        <h1 className="font-extrabold text-2xl">
          {selectToggole
            ? "Available Players"
            : `Selected Players ${selectedPlayer.length}/6 `}
        </h1>
        <div>
          <button
            onClick={() => SetToggole(true)}
            className={`py-3 px-4 font-bold border-1 border-gray-300 rounded-l-2xl border-r-0 ${
              selectToggole === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Availabe
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
            <div className="max-w-[1280px] mx-auto text-center mt-40">
              <span className="loading loading-spinner text-error text-center w-[300px] mx-auto "></span>
            </div>
          }
        >
          <AvailablePlayer
            playerPromise={playerPromise}
            setBalance={setBalance}
            setSelectedPlayer={setSelectedPlayer}
            selectedPlayer={selectedPlayer}
            availableBanlance={availableBanlance}
            // isSelected={isSelected}
            // setisSelected={setisSelected}
          ></AvailablePlayer>
        </Suspense>
      ) : (
        <SlectedPlayer
          selectedPlayer={selectedPlayer}
          removePlayer={removePlayer}
          SetToggole={SetToggole}
        ></SlectedPlayer>
      )}

      <ToastContainer> </ToastContainer>
    </>
  );
}

export default App;
