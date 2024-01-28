import React from "react";
import { CgSmartphoneRam } from "react-icons/cg";
import { BsFillDisplayFill } from "react-icons/bs";
import { FcCompactCamera, FcAndroidOs } from "react-icons/fc";
import { GiProcessor } from "react-icons/gi";

function Maindata({ name, maindata }) {
  console.log(name,maindata)
  return (
    <div className="w-full p-3 ">
      <div className="w-full">
        <p className="text-3xl font-bold text-black uppercase">{name}</p>
        <div className="w-full flex flex-col mt-5">
          <p className="text-xl font-semibold uppercase ml-2 pl-3 border-l-2 border-black ">
            main feature
          </p>
          <div className="w-full h-full grid grid-cols-3 gap-y-5 text-center">
            <div className="w-full p-4 flex flex-col justify-center items-center">
              <CgSmartphoneRam className="text-2xl md:text-4xl mb-1" />
              <p className="text-xs md:text-sm uppercase font-semibold">
                ram: {maindata?.ram}
              </p>
            </div>
            <div className="w-full p-4 flex flex-col justify-center items-center">
              <BsFillDisplayFill className="text-2xl md:text-4xl mb-1" />
              <p className="text-xs md:text-sm uppercase font-semibold">
                display: {maindata?.display}
              </p>
            </div>
            <div className="w-full p-4 flex flex-col justify-center items-center">
              <FcCompactCamera className="text-2xl md:text-4xl mb-1" />
              <p className="text-xs md:text-sm uppercase font-semibold">
                front camera: {maindata?.frontcamera}
              </p>
            </div>
            <div className="w-full p-4 flex flex-col justify-center items-center">
              <FcCompactCamera className="text-2xl md:text-4xl mb-1" />
              <p className="text-xs md:text-sm uppercase font-semibold">
                rear camera: {maindata?.rearcamera}
              </p>
            </div>
            <div className="w-full p-4 flex flex-col justify-center items-center">
              <FcAndroidOs className="text-2xl md:text-4xl mb-1" />
              <p className="text-xs md:text-sm uppercase font-semibold">
                operating: {maindata?.oprating}
              </p>
            </div>
            <div className="w-full p-4 flex flex-col justify-center items-center">
              <GiProcessor className="text-2xl md:text-4xl mb-1" />
              <p className="text-xs md:text-sm uppercase font-semibold">
                processor: {maindata?.processor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maindata;
