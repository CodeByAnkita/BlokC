import React, { useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Add-Garden";
import Bnb from "../icons/BNBlogo.svg";
import avalanche from "../icons/avalanchelogo.svg";
import Bluetree from "../icons/Bluetreelogo.svg";
import Cronos from "../icons/Cronoslogo.svg";
import Etherum from "../icons/Etherumlogo.svg";
import polygon from "../icons/polygonlogo.svg";

const GardensPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar />
      <Modal />

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="">
            <img className="pt-2.5" src={Bluetree} alt="Bluetree" />
          </div>
          <div>
            <p className="text-[20px] ">#4 Herrington</p>
            <p className="text-[15px] text-[#C80202]">No gardener</p>
          </div>
        </div>
        <div>
          <p className=" text-[20px] text-[#1D98DD]">$0.9937</p>
          <p className="text-[15px] text-[#C80202]">-8.64%</p>
        </div>
      </div>
      <div className="flex justify-start mx-5">
        <button
          className="bg-[#C80202] rounded-xl text-white my-5 py-3 w-40 h-10  "
          type="button"
          onClick={() => setShowModal(false)}
        >
          <p className="flex justify-center text-[15px]">No Gardener</p>
        </button>
        <button
          className="bg-[#C80202]	 rounded-xl mx-5 text-black my-5  py-3.5 w-40 h-12  "
          type="button"
          onClick={() => setShowModal(false)}
        >
          <p className="flex justify-center">8/6/2023</p>
        </button>
      </div>
      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-1">
            <img className=" p-2" src={Etherum} alt="Etherum" />
          </div>
          <div>
            <p className="text-[20px] ">Ethereum</p>
            <p className="text-[15px]">
              $0.99 <span className="text-[#C80202]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] text-[#383838]">0 ETH</p>
          <p className="text-[15px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-1">
            <img className=" p-2" src={Bnb} alt="Bnb" />
          </div>
          <div>
            <p className="text-[20px] ">BNB</p>
            <p className="text-[15px]">
              $0.99 <span className="text-[#88FF5F]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className=" text-[20px] text-[#383838]">0 BNB</p>
          <p className="text-[15px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-1">
            <img className=" p-2" src={polygon} alt="polygon" />
          </div>
          <div>
            <p className="text-[20px]">Polygon</p>
            <p className="text-[15px]">
              $0.99 <span className="text-[#C80202]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] text-[#383838]">0 MATIC</p>
          <p className="text-[15px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-1">
            <img className=" p-2" src={avalanche} alt="avalanche" />
          </div>
          <div>
            <p className="text-[20px] ">Avalnche</p>
            <p className="text-[15px]">
              $0.99 <span className="text-[#C80202]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] text-[#383838]">0 AVAX</p>
          <p className="text-[15px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-1">
            <img className=" p-2" src={Cronos} alt="Cronos" />
          </div>
          <div>
            <p className="text-[20px]">Cronos</p>
            <p className="text-[15px]">
              $0.99 <span className="text-[#C80202]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] text-[#383838]">0 CRO</p>
          <p className="text-[15px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>

      <div className="flex justify-evenly mx-auto">
        <button
          className="bg-[#1D39DD] rounded-xl  text-white my-5 w-40 h-12  "
          type="button"
          onClick={() => setShowModal(false)}
        >
          <p className=" flex justify-center">Assign Gardner</p>
        </button>
        <button
          className="bg-[#C80202] rounded-xl  text-white my-5 w-40 h-12  "
          type="button"
          onClick={() => setShowModal(false)}
        >
          <p className=" flex justify-center">Cancel Garden</p>
        </button>
      </div>
    </div>
  );
};
export default GardensPage;
