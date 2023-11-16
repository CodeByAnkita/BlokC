import React, { useState } from "react";
import Swap from "../icons/Swap.svg";
import AddGarden from "../icons/Addgarden.svg";
import Back from "../icons/back.svg";
import AddSign from "../icons/AddSign.svg";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" flex justify-center p-3  mx-auto bg-indigo-700 rounded-xl  md:max-w-4xl mt-10 text-white">
        <div className="p-8">
          <div className=" text-4xl  ">Total Balance</div>

          <div className=" text-6xl pt-6 ">$2,567.50</div>
          <div className="flex p-1 ">
            <div className=" bg-indigo-400 border border-green-400 h-2 rounded-lg w-1/2"></div>
            <div className=" bg-green-400 border border-indigo-400 h-2 rounded-lg w-1/2"></div>
          </div>
          <div className="flex text-[15px]">
            <p className="w-1/2">Self Garden(8.64%)</p>
            OtherGarden(8.64%)
          </div>

          <div className="flex p-1">
            <div className=" bg-indigo-400 border border-green-400 h-2 rounded-lg w-1/2"></div>
            <div className=" bg-green-400 border border-indigo-500 h-2 rounded-lg w-1/2"></div>
          </div>

          <div className="flex text-[15px] ">
            <p className="w-1/2">BLOKC(8.64%)</p>
            Other Coins(8.64%)
          </div>
          <div className="flex justify-left p-1 mx-0 ">
            <button onClick={() => setShowModal(true)}>
              <img src={AddGarden} alt="AddGarden" />
              <button className=" mr-5 text-[20px]">Add Garden</button>
            </button>

            {showModal ? (
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white text-black outline-none focus:outline-none">
                    <button onClick={() => setShowModal(false)}>
                      <img src={Back} alt="Back" />
                      <div className="text-blue-600">Back</div>
                    </button>
                    <div className="flex items-start justify-between">
                      <img src={AddSign} alt="AddSign" />
                      Add New Garden
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                      ></button>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <label className="block text-black text-sm  mb-1">
                        Garden Name
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                      <label className="block text-black text-sm  mb-1">
                        ETH to Deposite
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                      <label className="block text-black text-sm  mb-1">
                        Gardener
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    </div>
                    <button
                      className=" bg-blue-600  uppercase text-sm px-6 py-3 text-black rounded shadow hover:shadow-lg "
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="  ">
          <img className="" src={Swap} alt="Swap" />
          <button className=" mr-5 text-[20px]">Swap</button>
        </div>
      </div>
    </>
  );
};

export default Modal;

// import Model from "../components/GardenPopup";

// function AddGarden() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="p-10 flex justify-center w-full">
//       <button
//         className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white"
//         onClick={() => setOpen(true)}
//       >
//         Open
//       </button>
//       <Model open={open} onClose={() => setOpen(false)}>
//         <div className="flex flex-col gap-4">
//           <h1 className="text-2xl">Model Title</h1>
//           <p>bfygfgbdhjfyf gyqdyuqdqhjd gdyugqwdihbqd</p>
//           <p>gdqwduqwgd tqwbdhdqn dqdojld hduiqhd</p>
//           <hr className="border-t-solid border-1 border-grey" />
//         </div>
//       </Model>
//     </div>
//   );
// }

// export default AddGarden;
