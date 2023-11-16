// Home.js
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../icons/logo.svg";
import Google from "../icons/google.svg";
import Twitter from "../icons/twitter.svg";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);

  const buttonStyle =
    "md:w-[484px] md:h-[61px] border-[#1D39DD] rounded-[8px] border-2 flex justify-center gap-4 items-center my-5 w-[330px] h-[48px] ";

  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (error) setError(false);
  };

  const handleLogin = () => {
    if (!isChecked) {
      alert("Please tick the checkbox to proceed.");
    } else {
      console.log("Logged in!");
    }
  };
  return (
    <div>
      <div className=" mx-auto flex h-[100vh] w-[100%] flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center  p-0 md:p-5">
          <img src={logo} alt="logo" />
        </div>

        <p className="text-[33px]"> Welcome to BLOKC </p>

        <div>
          <p className="mr-32 mt-20 text-[20px] text-[#B6B6B6] md:mr-40">
            Login as:
          </p>
        </div>

        <div>
          <input type="checkbox" required onChange={handleCheck} />
          <label className="mr-20 text-[14px] md:text-[18px]">
            Garden [Investor]
          </label>
        </div>

        <div>
          <input
            id="checkbox"
            type="checkbox"
            required
            onChange={handleCheck}
          />
          <label className="mr-5 text-[14px] md:text-[18px]">
            Gardener [Fund Manager]
          </label>
        </div>

        {error && (
          <div className="text-red-500">
            Please tick the checkbox to proceed.
          </div>
        )}

        <div className="mb-px flex flex-col ">
          <Link to="/Home">
            {" "}
            <button
              className={`${buttonStyle} flex items-center justify-center`}
              onClick={handleLogin}
            >
              <img src={Google} alt="Google" className="icon" />
              Login with Google
            </button>
          </Link>
        </div>
        <div className="mb-8 mt-1.5 flex flex-col">
          <Link to="/Home">
            {" "}
            <div>
              <button
                className={`${buttonStyle} flex items-center justify-center`}
                onClick={handleLogin}
              >
                <img src={Twitter} alt="Twitter" className="icon" />
                Login with Twitter
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
