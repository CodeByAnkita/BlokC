import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import Swap from "../icons/Swap.svg";
// import AddGarden from "../icons/Addgarden.svg";
// import Garden from "../icons/Gardens1.svg";
// import AddSign from "../icons/AddSign.svg";
import Back from "../icons/back.svg";
import GardenList from "./GardenList";
import Modal from "./Add-Garden";

function Home() {
  return (
    <>
      <Navbar />
      <Modal />

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
    </>
  );
}
export default Home;
