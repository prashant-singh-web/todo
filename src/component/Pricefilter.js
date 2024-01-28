import React, { useState } from "react";

function Pricefilter() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(65000);

  const handleMinValueChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxValueChange = (e) => {
    setMaxValue(e.target.value);
  };
  return (
    <div className="w-full  grid-cols-[80%_20%] my-10 gap-x-10 hidden md:grid ">
      <div className="w-full bg-white flex flex-col p-5">
        <p className="text-2xl font-bold">Let's Find a Mobile For You!</p>
        <div className="w-full grid grid-cols-[66%_17%_17%] divide-x">
          <div className="w-full flex flex-col">
            <p className="text-xs font-medium">By Price</p>
            <div className="flex items-center justify-center w-full mt-12">
              <div className="w-full max-w-xs relative">
                <input
                  type="range"
                  min="0"
                  max="20000"
                  value={minValue}
                  onChange={handleMinValueChange}
                  className="slider tum absolute top-0 left-0 appearance-none h-1 w-[50%] bg-orange-100  rounded-none outline-none "
                />
                <input
                  type="range"
                  min="20001"
                  max="65000"
                  value={maxValue}
                  onChange={handleMaxValueChange}
                  className="slider absolute top-0 right-0 bg-orange-100  appearance-none  w-[50%] h-1  rounded-none outline-none "
                />
              </div>
            </div>
            <div className="w-full flex justify-between flex-row text-sm items-center  px-5 my-5">
              <div className="flex text-gray-500">
                <p className="my-auto">Rs.</p>
                <input
                  type="text"
                  placeholder="20000"
                  value={minValue}
                  className="border rounded-md p-1 pl-2"
                />
              </div>
              <p>to</p>
              <div className="flex text-gray-500">
                <p className="my-auto">Rs.</p>
                <input
                  type="text"
                  placeholder="20000"
                  value={maxValue}
                  className="border rounded-md p-1 pl-2"
                />
              </div>
            </div>
            <button className="py-2 text-sm font-medium text-white bg-orange-600 mx-5 rounded-md hover:bg-gray-800">
              Find Mobile {">"}
            </button>
          </div>
          <div className="w-full ">
            <ul className="mx-auto space-y-2 text-xs text-left font-semibold  px-5">
              <li className="text-black font-bold text-sm">By Brand</li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer border-b border-gray-400 py-1">
                Samsung
              </li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer border-b border-gray-400 py-1">
                Onplus
              </li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer border-b border-gray-400 py-1">
                Mi
              </li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer border-b border-gray-400 py-1">
                Vivo
              </li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer  py-1">
                Oppo
              </li>
            </ul>
          </div>
          <div className="w-full ">
            <ul className="mx-auto space-y-2 text-xs text-left font-semibold  px-5">
              <li className="text-black font-bold text-sm">By Features</li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer border-b border-gray-400 py-1">
                5g connectivty
              </li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer border-b border-gray-400 py-1">
                5000+
              </li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer border-b border-gray-400 py-1">
                8 GB RAM
              </li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer border-b border-gray-400 py-1">
                64+ mp camera
              </li>
              <li className="text-gray-500 my-auto hover:text-orange-500 cursor-pointer  py-1">
                Android 12
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-white"></div>
    </div>
  );
}

export default Pricefilter;
