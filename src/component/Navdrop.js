import React, { useState } from "react";
import {
  mobilecat,
  catgory,
  brands,
  priceRange,
  tablet,
  besttop10,
  besttop10range,
  comparetype,
  comparemobile,
  newsSection,
  eleaudio,
} from "../helper/img/arraydata/data";

function Navdrop() {
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);

  // mobile and tablet
  const listhandle = () => {
    setDrop(true);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
  };
  const listhandle1 = () => {
    setDrop(false);
    setDrop1(true);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
  };
  const listhandle2 = () => {
    setDrop(false);
    setDrop1(false);
    setDrop2(true);
    setDrop3(false);
    setDrop4(false);
    setDrop5(false);
  };
  const listhandle3 = () => {
    setDrop(false);
    setDrop1(false);
    setDrop2(false);
    setDrop3(true);
    setDrop4(false);
    setDrop5(false);
  };
  const listhandle4 = () => {
    setDrop(false);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(true);
    setDrop5(false);
  };
  const listhandle5 = () => {
    setDrop(false);
    setDrop1(false);
    setDrop2(false);
    setDrop3(false);
    setDrop4(false);
    setDrop5(true);
  };

  return (
    <div className="w-full text-[8px]   hidden md:block ">
      <ul className="w-full flex flex-row justify-center  ">
        <li className="cursor-pointer   capitalize font-bold relative text-gray-500 text-sm border-r-[1.5px] border-gray-600  hover:bg-gray-500 hover:text-black ">
          <div
            className={
              drop
                ? "w-[500px] h-auto z-10 absolute top-9 left-0 translate-y-[0%] bg-white border-[2px] border-gray-500 flex flex-row justify-between hover:text-black "
                : "w-[500px] h-[0px] -z-10 translate-y-[100%] hidden  absolute top-10 left-0 bg-black "
            }
            onMouseLeave={() => setDrop(false)}
          >
            <div className="full  flex flex-col pl-3 py-3">
              <div className="w-full h-full text-orange-500">
                mobile
                <ul className="pt-1 text-sm">
                  {mobilecat.map((item, i) => {
                    return (
                      <li
                        className="text-black text-sm font-light mb-1 hover:text-orange-500"
                        key={i}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full h-full text-orange-500">
                catgory
                <ul className="pt-1 text-sm">
                  {catgory.map((item, i) => {
                    return (
                      <li
                        className="text-black capitalize font-light mb-1 hover:text-orange-500"
                        key={i}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="full py-3 text-gray-500">
              Brands
              <ul className="pt-1 text-sm">
                {brands.map((item, i) => {
                  return (
                    <li
                      className="text-black font-light mb-1 hover:text-orange-500"
                      key={i}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className=" py-3 text-gray-500 flex flex-col pr-3">
              price range
              <ul className="pt-1 text-sm">
                {priceRange.map((item, i) => {
                  return (
                    <li
                      className="text-black text-sm font-light mb-1 hover:text-orange-500"
                      key={i}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              <p className="text-orange-500">tablet</p>
              <ul className="pt-1 text-sm">
                {tablet.map((item, i) => {
                  return (
                    <li
                      className="text-black text-sm font-light mb-1 hover:text-orange-500"
                      key={i}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <p
            className="h-full w-full text-[10px] lg:text-xs  py-2 px-1"
            onMouseEnter={listhandle}
            // onMouseLeave={()=>setDrop(false)}
          >
            mobile & tablets
          </p>
        </li>
        <li
          className="cursor-pointer capitalize font-bold relative text-gray-500 text-sm border-r-[1.5px] border-gray-600 hover:bg-gray-500 hover:text-black"
          onMouseLeave={() => setDrop1(false)}
        >
          <div
            className={
              drop1
                ? "w-[450px] h-[300px] absolute top-9 p-5 left-0 bg-white border-[2px] border-gray-500 flex flex-row justify-around z-20 delay-500"
                : "w-[300px] h-[300px] absolute top-10 left-0 bg-black hidden z-20"
            }
            // onMouseOut={() => setDrop1(false)}
          >
            <div className="w-full">
              <ul className="pt-1 text-sm">
                {besttop10.map((item, i) => {
                  return (
                    <li
                      className="font-semibold uppercase mb-1 text-orange-500"
                      key={i}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full ">
              <p className="text-xs text-gray-500 uppercase">
                best mobile by prices
              </p>
              <ul className="pt-1 text-sm">
                {besttop10range.map((item, i) => {
                  return (
                    <li
                      className="text-black capitalize font-normal mb-1 hover:text-orange-500"
                      key={i}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p
            className="h-full w-full text-[10px] lg:text-xs  py-2 px-1"
            onMouseEnter={listhandle1}
            // onMouseLeave={() => setDrop1(false)}
          >
            top 10
          </p>
        </li>
        <li
          className="cursor-pointer  capitalize font-bold relative text-gray-500 text-sm border-r-[1.5px] border-gray-600 hover:bg-gray-500 hover:text-black"
          onMouseLeave={() => setDrop2(false)}
        >
          <div
            className={
              drop2
                ? "w-[500px] h-[400px] absolute p-5 top-9 left-0 bg-white border-[2px] border-gray-500 flex flex-row justify-around z-30"
                : "w-[300px] h-[300px] absolute top-10 left-0 bg-black hidden z-20"
            }
          >
            <div className="w-full">
              <ul className="pt-1 text-sm">
                {comparetype.map((item, i) => {
                  return (
                    <li
                      className="font-semibold text-sm uppercase mb-1 text-orange-500 "
                      key={i}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full">
              <p className="text-black">TOP MOBILE COMPARISONS</p>
              <ul className="pt-1 text-sm">
                {comparemobile.map((item, i) => {
                  return (
                    <li
                      className="font-normal text-sm capitalize mb-1 text-black hover:text-orange-500"
                      key={i}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p
            className="h-full w-full text-[10px] lg:text-xs  py-2 px-1"
            onMouseEnter={listhandle2}
            // onMouseLeave={()=>setDrop2(false)}
          >
            compare
          </p>
        </li>
        <li className="cursor-pointer capitalize my-auto font-bold relative text-gray-500 text-sm border-r-[1.5px] border-gray-600 hover:bg-gray-500 hover:text-black">
          <p className=" w-full text-[10px] lg:text-xs py-2 px-1">upcoming mobile</p>
        </li>
        <li
          className="cursor-pointer  capitalize font-bold relative text-gray-500 text-sm border-r-[1.5px] border-gray-600 hover:bg-gray-500 hover:text-black"
          onMouseLeave={() => setDrop3(false)}
        >
          <div
            className={
              drop3
                ? "w-[150px] h-auto py-3 absolute top-9 left-0 bg-white flex flex-row justify-around z-40 border-[2px] border-gray-500"
                : "w-[300px] h-[300px] absolute top-10 left-0 bg-black hidden z-20"
            }
          >
            <div className="w-full">
              <ul className="pt-1 text-sm">
                {newsSection.map((item, i) => {
                  return (
                    <li
                      className="font-semibold w-full text-left pl-4  uppercase mb-1 text-black hover:text-orange-500"
                      key={i}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p
            className="h-full w-full text-[10px] lg:text-xs  py-2 px-1"
            onMouseEnter={listhandle3}
            //  onMouseLeave={()=>setDrop3(false)}
          >
            news and reviews
          </p>
        </li>
        <li
          className="cursor-pointer my-auto  capitalize font-bold relative text-gray-500 text-sm border-r-[1.5px] border-gray-600 hover:bg-gray-500 hover:text-black"
          onMouseLeave={() => setDrop4(false)}
        >
          <div
            className={
              drop4
                ? "w-[700px] h-[500px] absolute top-9 -left-96 lg:right-0 bg-white border-[2px] border-gray-500 py-2 grid  grid-cols-3 place-items-top z-50"
                : "w-[300px] h-[300px] absolute top-10 left-0 bg-black hidden z-20"
            }
          >
            <div className="w-full px-3 mb-3">
              <p className="text-orange-500 border-b border-gray-300 pb-2">
                LAPTOP
              </p>
              <ul className="text-black font-normal text-sm pl-3 py-2">
                <li className="mb-1 hover:text-orange-500 ">
                  LAPTOP Price List
                </li>
              </ul>
              <div className="w-full mb-3">
                <p className="text-gray-500 ">BRANDS</p>
                <ul className="text-black font-normal text-sm pl-3 py-2">
                  <li className="mb-1  hover:text-orange-500 ">HP Laptops</li>
                  <li className="mb-1 hover:text-orange-500 ">DELL Laptops</li>
                  <li className="mb-1 hover:text-orange-500 ">APPLE Laptops</li>
                  <li className="mb-1 hover:text-orange-500 ">
                    LENOVO Laptops
                  </li>
                </ul>
              </div>
              <div className="w-full mb-3">
                <p className="text-gray-500">FEATURES</p>
                <ul className="text-black font-normal text-sm pl-3 py-2">
                  <li className="mb-1 hover:text-orange-500">I5 LAPTOPs</li>
                  <li className="mb-1 hover:text-orange-500"> I7 LAPTOPs</li>
                  <li className="mb-1 hover:text-orange-500">GAMING LAPTOPs</li>
                  {/* <li className="mb-1 hover:text-orange-500"> 24 INCH LED TV</li> */}
                </ul>
              </div>
              <div className="w-full mb-3">
                <p className="text-gray-500">PRICE</p>
                <ul className="text-black  font-normal text-sm pl-3 py-2">
                  <li className="mb-2 hover:text-orange-500">
                    Best Laptops Under 20,000
                  </li>
                  <li className="mb-2 hover:text-orange-500">
                    Best Laptops Under 30,000
                  </li>
                  <li className="mb-2 hover:text-orange-500">
                    Best Laptops Under 40,000
                  </li>
                  <li className="mb-2 hover:text-orange-500">
                    Best Laptops Under 50,000
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-3">
              <p className="text-orange-500 border-b border-gray-300 pb-2">
                TVs
              </p>
              <ul className="text-black font-normal text-sm pl-3 py-2">
                <li className="mb-1 hover:text-orange-500 ">LED TV</li>
                <li className="mb-1  hover:text-orange-500">SMART TV</li>
                <li className="mb-1  hover:text-orange-500">OLED TV</li>
              </ul>
              <div className="w-full mb-3">
                <p className="text-gray-500 ">BRANDS</p>
                <ul className="text-black font-normal text-sm pl-3 py-2">
                  <li className="mb-1  hover:text-orange-500 ">
                    SAMSUNG LED TV
                  </li>
                  <li className="mb-1 hover:text-orange-500 ">MI LED TV</li>
                  <li className="mb-1 hover:text-orange-500 ">SONY LED TV</li>
                  <li className="mb-1 hover:text-orange-500 ">LG LED TV</li>
                </ul>
              </div>
              <div className="w-full mb-3">
                <p className="text-gray-500">SCREEN SIZE</p>
                <ul className="text-black font-normal text-sm pl-3 py-2">
                  <li className="mb-1 hover:text-orange-500">
                    {" "}
                    24 INCH LED TV
                  </li>
                  <li className="mb-1 hover:text-orange-500">
                    {" "}
                    24 INCH LED TV
                  </li>
                  <li className="mb-1 hover:text-orange-500">
                    {" "}
                    24 INCH LED TV
                  </li>
                  <li className="mb-1 hover:text-orange-500">
                    {" "}
                    24 INCH LED TV
                  </li>
                </ul>
              </div>
              <div className="w-full mb-3">
                <p className="text-gray-500">PRICE</p>
                <ul className="text-black hover:text-orange-500 font-normal text-sm pl-3 py-2">
                  <li>LED TV UNDER 10,000</li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3">
              <div className="w-full">
                <p className="text-orange-500 border-b border-gray-300 pb-2">
                  AUDIO
                </p>
                <ul className="pl-3 py-2">
                  {eleaudio.map((item, index) => {
                    return (
                      <li
                        className="text-sm font-normal mb-1 hover:text-orange-500"
                        key={index}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="W-FULL">
                <p className="text-orange-500 border-b border-gray-300 pb-2">
                  WEARABLES
                </p>
                <ul className="flex flex-col capitalize text-black font-normal text-sm pl-3 py-2">
                  <li>smartwatches</li>
                  <li>fitness bands</li>
                </ul>
              </div>
              <p className="text-orange-500 border-b border-gray-300 pb-2">
                POWER BANKS
              </p>
              <p className="text-orange-500 border-b border-gray-300 pb-2">
                CAMERA
              </p>
            </div>
          </div>

          <p
            className="h-full w-full text-[10px] lg:text-xs  py-2 px-1"
            onMouseEnter={listhandle4}
            // onMouseLeave={()=>setDrop4(false)}
          >
            eletronics
          </p>
        </li>
        <li
          className="cursor-pointer capitalize my-auto font-bold relative text-gray-500 text-sm border-r-[1.5px] border-gray-600 hover:bg-gray-500 hover:text-black"
          onMouseLeave={() => setDrop5(false)}
        >
          <div
            className={
              drop5
                ? "w-[350px] h-[200px] absolute top-9 right-0 bg-white border-[2px] p-4 border-gray-500 flex flex-row justify-around z-60"
                : "w-[300px] h-[300px] absolute top-10 left-0 bg-black hidden z-20"
            }
          >
            <div className="w-full">
              <ul className="text-orange-500 font-semibold">
                <li className="mt-0">DTH RECHARGE PLANS</li>
                <li className="mt-2">MOBILE RECHARGE</li>
                <li className="mt-2"> CRYPTOCURRENCY</li>
                <li className="mt-2">GOLD PRICES</li>
                <li className="mt-2">SILVER PRICES</li>
                <li className="mt-2"> ENTERTAINMENT</li>
              </ul>
            </div>
            <div className="w-full pl-4">
              <p className="text-gray-500 border-b border-gray-300 pb-2">
                HOME APPLIANCE
              </p>
              <ul className="pl-2">
                <li className="text-black font-medium capitalize hover:text-orange-500 mt-2">
                  washing machine
                </li>
                <li className="text-black font-medium capitalize hover:text-orange-500 mt-2">
                  washing machine
                </li>
                <li className="text-black font-medium capitalize hover:text-orange-500 mt-2">
                  washing machine
                </li>
              </ul>
            </div>
          </div>

          <p
            className="h-full w-full  py-2 text-[10px] lg:text-xs px-1"
            onMouseEnter={listhandle5}
            // onMouseLeave={()=>setDrop5(false)}
          >
            more
          </p>
        </li>
        <li className="cursor-pointer my-auto capitalize font-bold relative text-gray-500  border-r-[1.5px] border-gray-600 hover:bg-gray-500 hover:text-black">
          <p className=" w-full text-[10px] lg:text-xs  py-2 px-1">croma hub</p>
        </li>
        <li className="cursor-pointer my-auto capitalize font-bold relative text-gray-500  border-r-[1.5px] border-gray-600 hover:bg-gray-500 hover:text-black">
          <p className=" w-full text-[10px] lg:text-xs py-2 px-1">amezon central</p>
        </li>
        <li className="cursor-pointer my-auto capitalize font-bold relative text-gray-500   hover:bg-gray-500 hover:text-black">
          <p className=" w-full text-[10px] lg:text-xs py-2 px-1">intel evo hub</p>
        </li>
      </ul>
    </div>
  );
}

export default Navdrop;
