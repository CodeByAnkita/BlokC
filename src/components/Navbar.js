import React, { useState } from "react";
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
    { name: "Notification", link: "/Notification", icon: notification },
    { name: "Profile", link: "/Profile", icon: profile },
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

/**-------------------------------------------------- */
// <div>
//   <div className="flex justify gap-x-2 items-center mx-auto">
//     <img className="h-11 w-11" src={logo} alt="Logo" />
//     <h1 className="flex items p-1">BLOKC</h1>

//     <div className="flex items p-5 gap-5 ">
//       <Link to="/Home">
//         <img className="h-5 w-5" src={homeIcon} alt="Home" />
//         Home
//       </Link>
//       <Link to="/Growth">
//         <img className="h-5 w-5" src={growthIcon} alt="Growth" />
//         <p className="">Growth</p>
//       </Link>
//       <Link to="/Gardens">
//         <img className="h-5 w-5" src={gardensIcon} alt="Gardens" />
//         Gardens
//       </Link>
//       <Link to="/Discover">
//         <img className="h-5 w-5" src={discoverIcon} alt="Discover" />
//         Discover
//       </Link>
//     </div>
//     <div>
//       <img className="h-5 w-5 flex-1 " src={bellIcon} alt="Bell" />
//       <Link to="/profile">
//        <img className="h-5 w-5 flex-1 " src={bellIcon} alt="Bell" />
//       </Link>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
/**----------------------------------------- */

// import React, { useState } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
// import logo from "../icons/icon-256x256.png";
// import homeIcon from "../icons/Home1.png";
// import growthIcon from "../icons/Growth1.png";
// import gardensIcon from "../icons/Gardens1.png";
// import discoverIcon from "../icons/Discover1.png";
// import bellIcon from "../icons/bell.png";
// import profileIcon from "../icons/profiledefault.jpg";

// import { MenuIcon, XIcon } from "@heroicons/react/outline";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   const handleClose = () => setNav(!nav);

//   return (
//     <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
//       <div className="px-2 flex justify-between items-center w-full h-full">
//         <div className="flex items-center">
//           <img className="h-12 w-12 mr-1 " src={logo} alt="Logo" />
//           <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BLOKC</h1>
//           <ul className="hidden md:flex">
//             <li>
//               <Link to="Home" smooth={true} duration={500}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="Growth" smooth={true} offset={-200} duration={500}>
//                 Growth
//               </Link>
//             </li>
//             <li>
//               <Link to="Gardens" smooth={true} offset={-50} duration={500}>
//                 Gardens
//               </Link>
//             </li>
//             <li>
//               <Link to="Discover" smooth={true} offset={-100} duration={500}>
//                 Discover
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="hidden md:flex pr-4">
//           <button className="border-none bg-transparent text-black mr-4">
//             Sign In
//             <img className="h-5 w-5 flex-1 " src={bellIcon} alt="Bell" />
//           </button>
//           <button className="px-8 py-3">Sign Up</button>
//           <img className="px-8 py-3" src={bellIcon} alt="Bell" />
//         </div>
//         <div className="md:hidden mr-4" onClick={handleClick}>
//           {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
//         </div>
//       </div>

//       <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8"}>
//         <li className="border-b-2 border-white w-full">
//           <Link onClick={handleClose} to="Home" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li className="border-b-2 border-white w-full">
//           <Link
//             onClick={handleClose}
//             to="Growth"
//             smooth={true}
//             offset={-200}
//             duration={500}
//           >
//             Growth
//           </Link>
//         </li>
//         <li className="border-b-2 border-white w-full">
//           <Link
//             onClick={handleClose}
//             to="Gardens"
//             smooth={true}
//             offset={-50}
//             duration={500}
//           >
//             Gardens
//           </Link>
//         </li>
//         <li className="border-b-2 border-white w-full">
//           <Link
//             onClick={handleClose}
//             to="Discover"
//             smooth={true}
//             offset={-100}
//             duration={500}
//           >
//             Discover
//           </Link>
//         </li>

//         <div className="flex flex-col my-4">
//           <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
//             Sign In
//           </button>
//           <button className="px-8 py-3">Sign Up</button>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
