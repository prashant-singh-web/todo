import React from "react";

function Batterysections({ battery }) {
  console.log("Battery", battery);
  return (
    <div className="w-full mt-6 ">
      <p className="text-xl md:text-2xl border-l-2 border-black pl-2 uppercase font-bold">
        battery
      </p>
      <div className="w-full text-left grid place-items-center">
        <table className="w-full md:w-[70%] divide-y divide-gray-300 my-5 text-start">
          <tr className="pb-2 text-start ">
            <td className="text-base md:text-lg capitalize font-semibold w-32">
              battery capacity
            </td>
            <td className="text-xs md:text-sm uppercase font-normal w-full md:w-1/2">
              {battery?.batterycapacity}
            </td>
          </tr>
          <tr>
            <td className="text-base md:text-lg capitalize font-semibold">battery type </td>
            <td className="text-xs md:text-sm uppercase font-normal">
              {battery?.batterytype}
            </td>
          </tr>
          <tr className="text-left">
            <td className="text-base md:text-lg capitalize font-semibold">
              {" "}
              charging{" "}
            </td>
            <td className="text-xs md:text-sm uppercase font-normal">
              {battery?.charging}
            </td>
          </tr>
          <tr className="text-left">
            <td className="text-base md:text-lg capitalize font-semibold">
              {" "}
              fast charging{" "}
            </td>
            <td className="text-xs md:text-sm uppercase font-normal">
              {battery?.fastcharging}
            </td>
          </tr>
          <tr className="text-left">
            <td className="text-base md:text-lg capitalize font-semibold">
              {" "}
              charging port{" "}
            </td>
            <td className="text-xs md:text-sm uppercase font-normal">
              {battery?.chargingport}
            </td>
          </tr>
          
          <tr>
            <td className="text-base md:text-lg capitalize font-semibold">
              wireless charging{" "}
            </td>
            <td className="text-xs md:text-sm uppercase font-normal">
              {battery?.wireless ? battery?.wireless : "no"}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Batterysections;
