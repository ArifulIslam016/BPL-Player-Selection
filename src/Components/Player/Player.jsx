import React, { useState } from "react";
import profileImg from "../../assets/profile.png";
import CountryFlagImg from "../../assets/CountryFlag.png";
import { toast } from "react-toastify";

const Player = ({
  player,
  setBalance,
  setSelectedPlayer,
  selectedPlayer,
  availableBanlance
  // isSelected,
  // setisSelected,
}) => {
  const [isSelected, setisSelected] = useState(false);
  const handleChoseplayerButton = () => {
    const playerPrice = parseInt(
      player.price.split("USD").join().split(",").join("")
    );
    if(availableBanlance<playerPrice){
      toast("Insufficiant Balance")
      return
    }
    
    setBalance(availableBanlance-playerPrice)

    // setBalance((prev) => {
    //   if (prev >= playerPrice) {
    //     // setisSelected(true);
    //     setisSelected(true);
    //     return prev - playerPrice;
    //   } else {
    //     toast("Insuffsiunt Balance");
    //     // console.log(prev)
    //     return prev;
    //   }
    // });
if(selectedPlayer.length===6){
  toast("Maximum Player Slected")
  return
}
setisSelected(true);
    setSelectedPlayer((prev) => [...prev, player]);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4">
      <figure>
        <img
          className="h-[350px] object-cover rounded-2xl"
          src={player.image}
          alt="Imageof Player"
        />
      </figure>
      <div className="">
        <div className="flex my-3 items-center">
          <img src={profileImg} alt="" />
          <h2 className="card-title ml-2 font-bold">{player.name}</h2>
        </div>

        <div className="flex justify-between items-center border-b-1 border-b-gray-400 pb-4">
          <div className="flex items-center">
            <img className=" h-[20px] mr-1 " src={CountryFlagImg} alt="" />
            <span>{player.country}</span>
          </div>
          <button className="btn">{player.role}</button>
        </div>

        <h1 className="font-extrabold text-green-600">
          Rating: {player.rating}
        </h1>
        <div className="flex justify-between  items-center my-3">
          <h1 className="font-bold"> {player.battingStyle}</h1>
          <h1 className="font-bold"> {player.bowlingStyle}t</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Price:{player.price}</h1>
          <button
            disabled={isSelected}
            className="btn"
            onClick={handleChoseplayerButton}
          >
            {isSelected ? "Selected" : "ChoosePlayer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
