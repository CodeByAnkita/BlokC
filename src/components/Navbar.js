
/**{ import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../icons/icon-256x256.png";
import home from "../icons/Home1.png";
import growth from "../icons/Growth1.png";
import gardens from "../icons/Gardens1.png";
import discover from "../icons/Discover1.png";
import notification from "../icons/bell.png";
import profile from "../icons/profiledefault.jpg";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/Home"},
    { name: "Growth", link: "/Growth"},
    { name: "Gardens", link: "/Gardens"},
    { name: "Discover", link: "/Discover" },
    { name: "Notification", link: "/Notification" },
    { name: "Profile", link: "/Profile" },
  ];

  return (
    <div className="border-b border-indigo-500  w-full px-5 ">
      <div className="md:flex items-center justify-between ">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center
      text-black"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2 flex items p-1">
            <img className="h-12 w-12 mr-1 " src={logo} alt="Logo" />
          </span>
          BLOKC
        </div>

        <ul
          className={
            "md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
          }
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-black hover:text-indigo-600  duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar; 
*/

/**-------------------------------------------------- */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../icons/icon-256x256.png";
import home from "../icons/Home1.png";
import growth from "../icons/Growth1.png";
import gardens from "../icons/Gardens1.png";
import discover from "../icons/Discover1.png";
import notification from "../icons/bell.png";
import profile from "../icons/profiledefault.jpg";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/Home", icon: home },
    { name: "Growth", link: "/Growth", icon: growth },
    { name: "Gardens", link: "/Gardens", icon: gardens },
    { name: "Discover", link: "/Discover", icon: discover },
    {   link: "/Notification", icon: notification },
    {  link: "/Profile", icon: profile },
  ];

  return (
    <div className="border-b border-indigo-500  w-full px-5 p-2 ">
      <div className="md:flex items-center justify-between ">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center text-black"
        >
          <span className="text-3xl text-indigo-600 mr-2 flex items p-1">
            <img className="h-8 w-8 mr-2" src={logo} alt="Logo" />
          </span>
          BLOKC
        </div>

        <ul
          className={
            "md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
          }
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 flex items-center">
              <Link to={link.link} className="text-black hover:text-indigo-600 duration-500 flex items-center">
                <img src={link.icon} alt={link.name} className="h-5 w-5 mr-2" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;




