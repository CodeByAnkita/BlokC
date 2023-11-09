import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** Import All Components*/
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Swap from "./components/Swap";
import Profile from "./components/Profile";
import Notification from "./components/Notification";
import Growth from "./components/Growth";
import Gardens from "./components/Gardens";
import Home from "./components/Home";
import Discover from "./components/Discover";
import AddGarden from "./components/Add-Garden";

import AddGardener from "./components/Add-Gardener";

/** Root Routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/navbar",
    element: <Navbar></Navbar>,
  },
  {
    path: "/swap",
    element: <Swap></Swap>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/notification",
    element: <Notification></Notification>,
  },
  {
    path: "/growth",
    element: <Growth></Growth>,
  },
  {
    path: "/gardens",
    element: <Gardens></Gardens>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/discover",
    element: <Discover></Discover>,
  },
  {
    path: "/addgarden",
    element: <AddGarden></AddGarden>,
  },

  {
    path: "/addgardener",
    element: <AddGardener></AddGardener>,
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider route={router}></RouterProvider>
    </main>
  );
}
