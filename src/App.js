import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** Import All Components*/
import Login from "./components/Login";

import Swap from "./components/Swap";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import Growth from "./components/Growth";
import Gardens from "./components/Gardens";
import Home from "./components/Home";
import Discover from "./components/Discover";
import AddGarden from "./components/Add-Garden";
import AddGardener from "./components/Add-Gardener";
import PageNotFound from "./components/PageNotFound";

/** Root Routes */
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route exact path="/addgardener" element={<AddGardener />} />
        <Route exact path="/addgarden" element={<AddGarden />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/gardens" element={<Gardens />} />
        <Route exact path="/growth" element={<Growth />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/swap" element={<Swap />} />
        <Route exact path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
