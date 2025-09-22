import React from "react";

const SelectedPlayerCard = ({ brought }) => {
  return (
    <div className="max-w-[1280px] mx-auto p-10">
      <div className="flex justify-between items-center rounded-2xl border-2 border-gray-500 p-4 ">
        <div className="flex items-center ">
          <img
            className="w-[80px] h-[80px] mr-3 rounded-2xl"
            src={brought.image}
            alt=""
          />
          <div>
            <h3 className="font-bold text-xl">{brought.name} </h3>
            <h4 className="text-sm">{brought.role} </h4>
          </div>
        </div>
        <img src="https://i.ibb.co.com/DgTbrXkC/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
