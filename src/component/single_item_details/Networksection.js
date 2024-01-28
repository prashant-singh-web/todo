import React from "react";

function Networksection({ network }) {
  return (
    <div className="w-full mt-6 ">
      <p className="text-xl md:text-2xl border-l-2 border-black pl-2 uppercase font-bold">
        network
      </p>
      <div className="w-full text-left grid place-items-center my-5">
        <table className="w-full md:w-[70%] divide-y divide-gray-300 text-start ">
          <tr className="pb-2  ">
            <td className="text-base md:text-lg capitalize font-semibold w-32">
              sim type
            </td>
            <td className="text-xs md:text-sm pl-2  uppercase font-normal w-full md:w-1/2">
              {network?.simsize}
            </td>
          </tr>
          <tr>
            <td className="text-base md:text-lg capitalize font-semibold">
              sim slot{" "}
            </td>
            <td className="text-xs md:text-sm pl-2 uppercase font-normal">
              {network?.simslot}
            </td>
          </tr>
          <tr className="text-left">
            <td className="text-base md:text-lg capitalize font-semibold">
              {" "}
              network suppurt{" "}
            </td>
            <td className="text-xs md:text-sm pl-2 uppercase font-normal">
              {network?.netsuppurt}
            </td>
          </tr>
          <tr>
            <td className="text-base md:text-lg capitalize font-semibold">
              sar value{" "}
            </td>
            <td className="text-xs md:text-sm pl-2 uppercase font-normal">
              {network?.sarvalue}
            </td>
          </tr>
          <tr>
            <td className="text-base md:text-lg capitalize font-semibold">
              wifi{" "}
            </td>
            <td className="text-xs md:text-sm pl-2 uppercase font-normal">
              {network?.wifi}
            </td>
          </tr>
          <tr>
            <td className="text-base md:text-lg capitalize font-semibold">
              bluetooth{" "}
            </td>
            <td className="text-xs md:text-sm pl-2 uppercase font-normal">
              {network?.bluetooth}
            </td>
          </tr>
          <tr>
            <td className="text-base md:text-lg align-text-top capitalize font-semibold">
              usb connection{" "}
            </td>
            <td className="text-xs align-text-top md:text-sm pl-2 uppercase font-normal ">
              {network?.usbconnect ? network?.usbconnect : "not available"}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Networksection;
