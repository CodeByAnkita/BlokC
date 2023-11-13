import {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Swap from "../icons/Swap.svg";
import AddGarden from "../icons/Addgarden.svg";
import Garden from "../icons/Gardens1.svg";
import AddSign from "../icons/AddSign.svg";
import Back from '../icons/back.svg';
import GardenList from'./GardenList';
import Model from './Add-Garden';


function Home() {
  const [showModel, setShowModel] = useState(false);
  return (
    <Fragment>
      <Navbar />
      
      {/**After Navbar */}
      <div className=" flex justify-center p-3  mx-auto bg-indigo-700 rounded-xl  md:max-w-4xl mt-10 text-white">
        <div className="p-8">
          <div className=" text-4xl  ">Total Balance</div>

          <div className=" text-6xl pt-6 ">$2,567.50</div>
          <div className="flex p-1 ">
          <div className=" bg-indigo-400 border border-green-400 h-2 rounded-lg w-1/2"></div>
          <div className=" bg-green-400 border border-indigo-400 h-2 rounded-lg w-1/2"></div> 
           </div> 
            <div className="flex text-[15px]">
             <p className="w-1/2">
             Self Garden(8.64%)
             </p> 
             OtherGarden(8.64%)</div>
         
          <div className="flex p-1">
          <div className=" bg-indigo-400 border border-green-400 h-2 rounded-lg w-1/2"></div>
          <div className=" bg-green-400 border border-indigo-500 h-2 rounded-lg w-1/2"></div> 
           </div>
        
          <div className="flex text-[15px] ">
         
          <p className="w-1/2">
          BLOKC(8.64%) 
          </p>
        
          Other Coins(8.64%)
         
          </div>
          <div className="flex justify-evenly p-1 mx-0 "> 
          <img className="" src={AddGarden} alt="AddGarden" />
          <Link to="/Swap"> <img  className=""src={Swap} alt="Swap" /></Link></div>
          <div className="flex justify-evenly p-1 ">
          <button className=" ml-5 text-[20px]" onClick={() => setShowModel(true)}>
          Add Garden
          </button>
          <p className="mr-5 text-[20px]">
          Swap
          </p>
          </div>
          <Model isvisible={showModel} onClose={()=>setShowModel(false)}>
          <div className="py-6 px-6 lg:px-8 text-left">
        <h3 className="mb-4 text-xl font-medium text-black">Add New Garden</h3>
        <div className="space-y-6" action="#">
          <div>
            <p>Garden Name </p>
            <div className="bg-gray-50 border border-grey-300 text-black"></div>
          </div>
        </div>
      </div>
          </Model>
         
          <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-black">Add New Garden</h3>
          <div className="space-y-6" action="#">
            <div>
              <p>Garden Name </p>
              <div className="bg-gray-50 border border-grey-300 text-black"></div>
            </div>
          </div>
        </div>
          </div>
          </div>
  {/**<div className="flex text-white text-2xl gap-3 ">
      <Link to="/AddGarden">
        <img className="flex p-2" src={AddGarden} alt="AddGarden" />
        <div className=" text-[20px]">
        Add Garden
        </div>
      </Link>
      <div>
        <Link to="/Swap">
          <img  className="flex p-2"src={Swap} alt="Swap" />
          <div className=" text-[20px]">
          Swap
          </div>
        </Link>
      </div>
  </div>
 

      {/**After section */}
      <div className="  border-b border-indigo-500 m-5 ">
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
        <button >
   <img className=" mr-3" src={Back} alt="Back"/>
        </button>
        <button>
        Back
        </button>
      </div>
  
      <GardenList
title="Self Garden"
caret="You"
value="$0.99367"
percentage="-8.64%"
/>

<GardenList
title="#1 Pretty Patios"
caret="You"
value="$0.99367"
percentage="-8.64%"
/>

<GardenList
title="#1 Pretty Patios"
caret="You"
value="$0.99367"
percentage="-8.64%"
/>
 
<GardenList
title="#1 Pretty Patios"
caret="You"
value="$0.99367"
percentage="-8.64%"
/>    
 </Fragment>
  );
}
export default Home;
