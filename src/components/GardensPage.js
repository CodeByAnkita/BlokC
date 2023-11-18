import React from "react";
import Navbar from "./Navbar";
import Modal from "./Add-Garden";
import Bnb from "../icons/BNBlogo.svg";
import avalanche from "../icons/avalanchelogo.svg";
import Bluetree from "../icons/Bluetreelogo.svg";
import Cronos from "../icons/Cronoslogo.svg";
import Etherum from "../icons/Etherumlogo.svg";
import polygon from "../icons/polygonlogo.svg";

export default function GardensPage() {
  return (
    <div>
      <Navbar />
      <Modal />

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-2">
            <img className=" " src={Bluetree} alt="Bluetree" />
          </div>
          <div>
            <p className="text-[15px] pt-2">selfgarden</p>
            <p className="text-[10px]">
              Cared by <span className="text-[#88FF5F]">you</span>
            </p>
          </div>
        </div>
        <div>
          <p className=" pt-2  text-[15px] text-[#12C802]">$+5+65+</p>
          <p className="text-[10px] text-[#C80202]">56464</p>
        </div>
      </div>

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-2">
            <img className=" p-3" src={Etherum} alt="Etherum" />
          </div>
          <div>
            <p className="text-[15px] pt-2">Ethereum</p>
            <p className="text-[10px]">
              $0.99 <span className="text-[#C80202]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className=" pt-2  text-[15px] text-[#383838]">0 ETH</p>
          <p className="text-[10px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-2">
            <img className=" p-3" src={Bnb} alt="Bnb" />
          </div>
          <div>
            <p className="text-[15px] pt-2">BNB</p>
            <p className="text-[10px]">
              $0.99 <span className="text-[#88FF5F]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className=" pt-2  text-[15px] text-[#383838]">0 BNB</p>
          <p className="text-[10px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-2">
            <img className=" p-3" src={polygon} alt="polygon" />
          </div>
          <div>
            <p className="text-[15px] pt-2">Polygon</p>
            <p className="text-[10px]">
              $0.99 <span className="text-[#C80202]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className=" pt-2  text-[15px] text-[#383838]">0 MATIC</p>
          <p className="text-[10px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-2">
            <img className=" p-3" src={avalanche} alt="avalanche" />
          </div>
          <div>
            <p className="text-[15px] pt-2">Avalnche</p>
            <p className="text-[10px]">
              $0.99 <span className="text-[#C80202]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className=" pt-2  text-[15px] text-[#383838]">0 AVAX</p>
          <p className="text-[10px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>

      <div className="flex justify-between  mx-5 py-3">
        <div className="flex gap-3">
          <div className="pt-2">
            <img className=" p-3" src={Cronos} alt="Cronos" />
          </div>
          <div>
            <p className="text-[15px] pt-2">Cronos</p>
            <p className="text-[10px]">
              $0.99 <span className="text-[#C80202]">-8.64%</span>
            </p>
          </div>
        </div>
        <div>
          <p className=" pt-2  text-[15px] text-[#383838]">0 CRO</p>
          <p className="text-[10px] text-[#0a0a0a]">$0.99367</p>
        </div>
      </div>
    </div>
  );
}
