import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Swap from "../icons/Swap.svg";
import AddGarden from "../icons/Addgarden.svg";
import Garden from "../icons/Gardens1.svg";
import AddSign from "../icons/AddSign.svg";
import Back from '../icons/back.svg';
import Tree from '../icons/Tree.svg';

function Home() {
  return (
    <>
      <Navbar />
      {/**After Navbar */}
      <div className=" flex justify-center p-2  mx-auto bg-indigo-700 rounded-xl  md:max-w-4xl mt-10 text-white">
        <div className="p-8">
          <div className=" text-4xl  ">Total Balance</div>

          <div className=" text-6xl pt-6 ">$2,567.50</div>
          <div className="flex">
          <div className=" bg-indigo-400 border border-green-400 h-2 rounded-sm w-1/2"></div>
          <div className=" bg-green-400 border border-indigo-400 h-2 rounded-sm w-1/2"></div>  </div> <div>Self Garden(8.64%) Other Garden(8.64%)</div>
         
          <div className="flex">
          <div className=" bg-indigo-400 border border-green-400 h-2 rounded-sm w-1/2"></div>
          <div className=" bg-green-400 border border-indigo-400 h-2 rounded-sm w-1/2"></div>  </div>
        
          <div>BLOKC(8.64%) Other Coins(8.64%)</div>

          <div className="flex text-white text-2xl ">
            <Link to="/AddGarden">
              <img src={AddGarden} alt="AddGarden" />
              Add Garden
            </Link>
            <div>
              <Link to="/Swap">
                <img src={Swap} alt="Swap" />
                Swap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/**After section */}
      <div className="  border-b border-indigo-500 m-5 ">
      <div className="flex justify-between ">
      <div className="flex gap-3">
        <img className="h-8 text-[15px]" src={Garden} alt="Garden" />
        <p className="flex justify-between">
          Garden
          <img className="ml-2" src={AddSign} alt="AddSign" />
          </p>
          </div>
          <div>
          <p className="text-[15px] text-[#12C802]">$0.99367</p>
          <p className="text-[10px] text-[#C80202]">-8.64%</p>
          </div>
          </div>
      </div>

      {/** After line*/}
      
      <div className="flex m-5 py-1 ">
        <button >
   <img className="mr-2" src={Back} alt="Back"/>
        </button>
        <button>
        Back
        </button>
      </div>
  

    <div className="box-content  rounded-xl m-5 h-20 border border-indigo-500 ">
     <div className="flex justify-between py-2 mx-5">
     <div className="flex gap-3  ">
       <div className="flex items-center justify-center">  
       <img  src={Tree} alt="Tree" />
       </div>
       <div>
         <p className="text-[15px]">Self Garden</p>
         <p className="text-[10px]">
           Cared by <span className="text-[#88FF5F]">You</span>
         </p>
       </div>
     </div>
     <div>
       <p className="text-[15px] text-[#12C802]">$0.99367</p>
       <p className="text-[10px] text-[#C80202]">-8.64%</p>
     </div>
     </div>
   </div>

   <div className="box-content  rounded-xl m-5 h-20 border border-indigo-500 ">
   <div className="flex justify-between py-2 mx-5">
   <div className="flex gap-3  ">
     <div className="">  
     <img  src={Tree} alt="Tree" />
     </div>
     <div>
       <p className="text-[15px]">#1 Pretty Patios</p>
       <p className="text-[10px]">
         Cared by <span className="text-[#88FF5F]">You</span>
       </p>
     </div>
   </div>
   <div>
     <p className="text-[15px] text-[#12C802]">$0.99367</p>
     <p className="text-[10px] text-[#C80202]">-8.64%</p>
   </div>
   </div>
 </div>

 <div className="box-content  rounded-xl m-5 h-20  border border-indigo-500 ">
 <div className="flex justify-between py-2 mx-5">
 <div className="flex gap-3  ">
   <div className="flex items-center justify-center rounded-full bg-white shadow-2xl shadow-[#9F9F9F40]">  
   <img  src={Tree} alt="Tree" />
   </div>
   <div>
     <p className="text-[15px]">#1 Pretty Patios</p>
     <p className="text-[10px]">
       Cared by <span className="text-[#88FF5F]">You</span>
     </p>
   </div>
 </div>
 <div>
   <p className="text-[15px] text-[#12C802]">$0.99367</p>
   <p className="text-[10px] text-[#C80202]">-8.64%</p>
 </div>
 </div>
</div>

<div className="box-content  rounded-xl m-5 h-20  border border-indigo-500 ">
   <div className="flex justify-between py-2 mx-5 ">
   <div className="flex gap-3  ">
     <div className="flex items-center justify-center rounded-full bg-white shadow-2xl shadow-[#9F9F9F40]">  
     <img  src={Tree} alt="Tree" />
     </div>
     <div>
       <p className="text-[15px]">#1 Pretty Patios</p>
       <p className="text-[10px]">
         Cared by <span className="text-[#88FF5F]">You</span>
       </p>
     </div>
   </div>
   <div>
     <p className="text-[15px] text-[#12C802]">$0.99367</p>
     <p className="text-[10px] text-[#C80202]">-8.64%</p>
   </div>
   </div>
 </div>
 
    
 </>
  );
}
export default Home;
