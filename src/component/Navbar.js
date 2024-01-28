import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../helper/img/logo.gif";
import { LuSearch } from "react-icons/lu";
import { AiFillCaretDown } from "react-icons/ai";
import Navdrop from "./Navdrop";
import { RxHamburgerMenu } from "react-icons/rx";

import MobileNav from "./MobileNav";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [value, setValue] = useState("all");
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobile]);

  const data = [
    {
      id: 1,
      value: "all",
    },
    {
      id: 1,
      value: "mobile",
    },
    {
      id: 1,
      value: "tab",
    },
    {
      id: 1,
      value: "lap",
    },
    {
      id: 1,
      value: "deal",
    },
  ];
  const togglehandle = () => {
    setOpen((open) => !open);
    console.log(open);
  };

  return (
    <div className="w-full relative h-fit  flex flex-col  bg-[#191919]">
      {/* mobile version */}
      <div
        className={`absolute w-full h-[100vh] duration-300 ease-in-out ${
          mobile ? "translate-x-0" : "-translate-x-[100%]"
        } top-0 z-50 bg-black/40 block md:hidden `}
      >
        <div className="w-[80%] h-full overflow-y-scroll bg-white flex flex-col ">
          <div className="w-full flex p-2 shadow">
            <MdClose
              className="text-black my-auto text-xl"
              onClick={() => setMobile(false)}
            />
            <Link to="/" className="mx-auto">
              <img src={logo} alt="logo" className=" h-[30px] w-[100px] " />
            </Link>
          </div>
          <MobileNav />
        </div>
      </div>
      <div className="w-full flex-row justify-around items-center hidden md:flex">
        <p className="text-white text-xs">
          Largest Gadget Discovery Site in India
        </p>
        <div className="text-white capitalize">
          <ul className="flex flex-row text-xs">
            <li className="border-r-2 border-gray-500 pr-3  ml-3 text-[#0539A3]">
              {" "}
              <NavLink> latest mobile</NavLink>
            </li>
            <li className="border-r-2 border-gray-500 pr-3  ml-3">
              {" "}
              <NavLink> mobile</NavLink>
            </li>
            <li className="border-r-2 border-gray-500 pr-3  ml-3">
              {" "}
              <NavLink> mobile</NavLink>
            </li>
            <li className="border-r-2 border-gray-500 pr-3  ml-3">
              {" "}
              <NavLink> mobile</NavLink>
            </li>
            <li className="border-r-2 border-gray-500 pr-3  ml-3">
              {" "}
              <NavLink> mobile</NavLink>
            </li>
            <NavLink>
              <li className="ml-3 ">mobile</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="w-full  flex-col md:flex-row py-2  space-y-2 md:space-x-10 justify-center items-center  px-4  md:flex ">
        <div className="w-full flex   md:w-fit ">
          <RxHamburgerMenu
            className="text-white my-auto text-xl md:hidden"
            onClick={() => setMobile(true)}
          />
          <Link to="/" className="mx-auto ">
            <img src={logo} alt="logo" className=" h-[30px] w-[140px]  " />
          </Link>
        </div>
        <div className="  h-fit   flex flex-row justify-center items-center rounded-md ">
          <input
            type="text"
            className="focus-within:border-2 outline-none w-full md:w-[300px] lg:w-[400px] pl-4 p-1 rounded-md md:rounded-none focus-within:border-orange-600"
            placeholder="Search for products and brend"
          />
          <div className="w-fit flex-row justify-center items-center relative bg-[#D6D6D6] py-2 px-3 hidden md:flex">
            <input
              type="text"
              value={value}
              className="w-[50px] text-gray-600 uppercase text-xs font-bold h-full cursor-pointer "
              disabled
            />
            <AiFillCaretDown
              className="text-gray-600 text-xs "
              onClick={togglehandle}
            />
            <ul
              className={
                open
                  ? " absolute w-[100px] z-20 h-fit top-9 left-0 bg-white rounded-md border border-black py-2 px-3 transition-all duration-500 ease-linear"
                  : " absolute w-[100px] h-[0px] overflow-hidden -top-16 left-0 bg-white rounded-md border border-black py-2 px-3 transition-all duration-500 ease-linear -z-20"
              }
            >
              {data &&
                data.map((data, i) => {
                  return (
                    <li
                      key={i}
                      className="cursor-pointer"
                      value="mobile"
                      onClick={() => {
                        setValue(data.value);
                        setOpen(false);
                      }}
                    >
                      {data.value}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="w-fit h-[32px] flex-row justify-center items-center px-3 cursor-pointer bg-gray-600 rounded-sm hidden text-white font-bold md:flex">
            <LuSearch className="mr-2" />
            <p>search</p>
          </div>
        </div>
        <p className="hidden md:block text-sm text-orange-600">Login/Signup</p>
      </div>
      <Navdrop />
    </div>
  );
}

export default Navbar;
