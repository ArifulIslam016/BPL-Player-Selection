import React, { use } from "react";

import Player from "../Player/player";

const AvailablePlayer = ({ playerPromise, setBalance, setSelectedPlayer }) => {
  const playerData = use(playerPromise);
  //  console.log(playerData);

  return (
    <div className="grid grid-cols-3 gap-7  max-w-[1280px] mx-auto mt-6">
      {playerData.map((player) => {
        return (
          <Player
            key={player.rating}
            player={player}
            setBalance={setBalance}
            setSelectedPlayer={setSelectedPlayer}
          >
            {" "}
          </Player>
        );
      })}
      {/* <div className="card bg-base-100 w-96 shadow-sm p-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="">
          <div className="flex my-3 items-center">
            <img src={profileImg} alt="" />
            <h2 className="card-title ml-2">Viral Kohli</h2>
          </div>

          <div className="flex justify-between items-center border-b-1 border-b-gray-400 pb-4">
            <div className="flex items-center">
              <img className=" h-[20px] mr-1 " src={CountryFlagImg} alt="" />
              <span>India</span>
            </div>
            <button className="btn">All-Rounder</button>
          </div>

          <h1>Rating:</h1>
          <div className="flex justify-between  items-center my-3">
            <h1 className="font-bold"> Left-Hand-Bat</h1>
            <h1 className="font-bold"> Left-Hand-Bat</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Price:</h1>
            <button className="btn"> Choose Player</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AvailablePlayer;
