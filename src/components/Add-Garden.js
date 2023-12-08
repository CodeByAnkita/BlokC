import React, { useState } from "react";
import Swap from "../icons/Swap.svg";
import AddGarden from "../icons/Addgarden.svg";
import Back from "../icons/back.svg";
import AddSign from "../icons/AddSign.svg";
import Garden from "../icons/Gardens1.svg";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-center  mx-auto bg-indigo-700 rounded-xl md:max-w-4xl mt-10 text-white">
        <div className="p-8">
          <div className="text-4xl">Total Balance</div>

          <div className="text-6xl pt-6">$2,567.50</div>
          <div className="flex p-1">
            <div className="bg-indigo-400 border border-green-400 h-2 rounded-lg w-1/2"></div>
            <div className="bg-green-400 border border-indigo-400 h-2 rounded-lg w-1/2"></div>
          </div>
          <div className="flex text-[15px]">
            <p className="w-1/2">Self Garden(8.64%)</p>
            OtherGarden(8.64%)
          </div>

          <div className="flex p-1">
            <div className="bg-indigo-400 border border-green-400 h-2 rounded-lg w-1/2"></div>
            <div className="bg-green-400 border border-indigo-500 h-2 rounded-lg w-1/2"></div>
          </div>

          <div className="flex text-[15px] ">
            <p className="w-1/2">BLOKC(8.64%)</p>
            Other Coins(8.64%)
          </div>

          {/** popup box  Add Garden */}
          <div className="flex justify-left p-1 mx-0">
            <button onClick={() => setShowModal(true)}>
              <img src={AddGarden} alt="AddGarden" />
              <span className="mr-5 text-[20px] ">Add Garden</span>
            </button>
          </div>

          {showModal ? (
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-xl flex justify-center items-center overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className=" rounded-xl  relative flex flex-col  bg-white text-black p-8 m-8">
                  {/** back button */}
                  <button
                    className="flex items-start justify-start"
                    onClick={() => setShowModal(false)}
                  >
                    <img className=" mr-2 " src={Back} alt="Back" />
                    <p className="text-blue-600 ">Back</p>
                  </button>

                  {/** Add new button */}
                  <div className="pt-2  flex items-start justify-start">
                    <img src={AddSign} alt="AddSign" />
                    <p className="ml-2"> Add New Garden</p>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>

                  {/** Garden Name */}
                  <div className="relative p-2 flex-auto  ">
                    <label className="text-black text-base my-2">
                      Garden Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full p-2 bg-[#F2F2F2]  text-black" />

                    {/** ETH to Deposit */}
                    <label className="block text-black  text-base my-2">
                      ETH to Deposit
                    </label>
                    <input
                      type="number"
                      id="usdtDeposit"
                      name="usdtDeposit"
                      className="mb-2 h-[40px] w-full rounded-[6px] bg-[#F2F2F2] px-2 outline-none shadow appearance-none border  p-2  text-black"
                    />

                    {/** Gardner */}
                    <label className="block text-black text-base my-2 ">
                      Gardener
                    </label>
                    <select
                      id="category"
                      className="shadow border rounded bg-[#F2F2F2]  w-full p-3  text-black"
                    >
                      <option selected="Select Gardner"></option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div>

                  {/** Add button */}
                  <button
                    className="bg-blue-600 rounded-xl mx-auto flex items-center text-white my-5 py-3.5 w-32 h-12  "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <p className="mx-auto flex items-center">Add</p>
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/** Swap button */}
        <div className="">
          <img className="" src={Swap} alt="Swap" />
          <span className=" text-[20px]">Swap</span>
        </div>
      </div>

      <div className="  border-b border-[#1D39DD] m-5 ">
        <div className="flex justify-between py-3 ">
          <div className="flex gap-3">
            <img className="h-5 text-[15px]" src={Garden} alt="Garden" />
            <p className="flex justify-between">
              Garden
              <img className="ml-2 h-5 w-5 a" src={AddSign} alt="AddSign" />
            </p>
          </div>
          <div>
            <p className="text-[15px] text-[#12C802]">$0.99367</p>
            <p className="text-[10px] text-[#C80202]">-8.64%</p>
          </div>
        </div>
      </div>
      {/** After line*/}
      <div className="flex m-5 pt-0 h-3  ">
        <button>
          <img className=" mr-3" src={Back} alt="Back" />
        </button>
        <button>Back</button>
      </div>
    </>
  );
};

export default Modal;
