// import React from "react";

// const Model = ({ isVisible, onClose, children }) => {
//   if (!isVisible) return null;

//   const handleClose = (e) => {
//     if (e.target.id === 'wrapper') onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
//       <div className="md:w-[600px] w-[90%] mx-auto flex flex-col">
//         <button className="text-white text-xl self-end" onClick={onClose}>X</button>
//         <div className="bg-white p-2 rounded">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Model;

import { useState } from "react";
import Model from "../components/GardenPopup";

function AddGarden() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10 flex justify-center w-full">
      <button
        className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white"
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      <Model open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Model Title</h1>
          <p>bfygfgbdhjfyf gyqdyuqdqhjd gdyugqwdihbqd</p>
          <p>gdqwduqwgd tqwbdhdqn dqdojld hduiqhd</p>
          <hr className="border-t-solid border-1 border-grey" />
        </div>
      </Model>
    </div>
  );
}

export default AddGarden;
