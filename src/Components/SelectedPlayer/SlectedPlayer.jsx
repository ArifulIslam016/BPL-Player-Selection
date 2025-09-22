import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SlectedPlayer = ({ selectedPlayer }) => {
  // console.log(selectedPlayer);
  
  return (
    <div className="max-w-[1280px] mx-auto">
      {selectedPlayer.map((brought) => (
        <SelectedPlayerCard brought={brought}></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SlectedPlayer;