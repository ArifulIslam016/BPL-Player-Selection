import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SlectedPlayer = ({
  selectedPlayer,
  removePlayer,
  isSelected,
  setisSelected,SetToggole
}) => {
  // console.log(selectedPlayer);

  return (
    <div className="max-w-[1280px] mx-auto">
      {selectedPlayer.map((brought) => (
        <SelectedPlayerCard
          brought={brought}
          removePlayer={removePlayer}
          isSelected={isSelected}
          setisSelected={setisSelected}
        ></SelectedPlayerCard>
      ))}
      <button
        className="py-3 px-4 font-bold border-1
rounded-2xl
bg-[#E7FE29]"
        onClick={() => SetToggole(true)}
      >
        Add More Players
      </button>
    </div>
  );
};

export default SlectedPlayer;