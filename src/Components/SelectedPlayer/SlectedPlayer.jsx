import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SlectedPlayer = ({ selectedPlayer, removePlayer }) => {
  // console.log(selectedPlayer);

  return (
    <div className="max-w-[1280px] mx-auto">
      {selectedPlayer.map((brought) => (
        <SelectedPlayerCard
          brought={brought}
          removePlayer={removePlayer}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SlectedPlayer;