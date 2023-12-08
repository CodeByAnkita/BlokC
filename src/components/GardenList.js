import React from 'react';
import Tree from '../icons/Tree.svg';

function GardenList({ title, caret, value, percentage }) {
  return (
    <div className="box-content rounded-xl m-5 h-20 border border-indigo-500">
      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-2">
            <img src={Tree} alt="Tree" />
          </div>
          <div>
            <p className="text-[15px] pt-2">{title}</p>
            <p className="text-[10px]">
              Cared by <span className="text-[#88FF5F]">{caret}</span>
            </p>
          </div>
        </div>
        <div>
          <p className=" pt-2  text-[15px] text-[#12C802]">{value}</p>
          <p className="text-[10px] text-[#C80202]">{percentage}</p>
        </div>
      </div>
    </div>
  );
}



export default GardenList;
