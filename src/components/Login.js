import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../icons/logo.svg";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Investor");

  const buttonStyle =
    "md:w-[484px] md:h-[61px] border-[#1D39DD] rounded-[8px] border-2 flex justify-center gap-4 items-center my-5 w-[330px] h-[48px] ";

  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (error) setError(false);
  };

  const handleLogin = () => {
    if (!isChecked) {
      setError(true);
    } else {
      // Call your login function or navigate to the next page
      console.log("Logged in as", selectedOption);
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
          <div className="my-2 flex items-center gap-3">
            <input
              type="radio"
              className="h-[15px] w-[15px] rounded-[3px] border-[#1D39DD]"
              checked={selectedOption === "Investor"}
              onChange={() => setSelectedOption("Investor")}
            />
            <label className="text-[14px] md:text-[18px]">
              Garden [Investor]
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              className="h-[15px] w-[15px] rounded-[3px] border-[#1D39DD]"
              checked={selectedOption === "Manager"}
              onChange={() => setSelectedOption("Manager")}
            />
            <label className="text-[14px] md:text-[18px]">
              Gardener [Fund Manager]
            </label>
          </div>
        </div>

        {error && (
          <div className="text-[#C80202]">
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
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
