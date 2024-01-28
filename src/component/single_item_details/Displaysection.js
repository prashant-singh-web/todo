import React from 'react'

function Displaysection({display}) {
  return (
    <div className="w-full mt-6 ">
    <p className="text-xl md:text-2xl border-l-2 border-black pl-2 uppercase font-bold">
      display
    </p>
    <div className="w-full text-left my-5 grid place-items-center">
      <table className="w-full md:w-[70%] divide-y divide-gray-300 ">
        <tr className="pb-2">
          <td className="text-base w-32 md:text-lg capitalize font-semibold ">
            display type
          </td>
          <td className="text-xs md:text-sm pl-2 uppercase font-normal w-64 md:w-1/2">
            {display?.displaytype}
          </td>
        </tr>
        <tr>
          <td className="text-base md:text-lg  capitalize font-semibold">
            resoluation{" "}
          </td>
          <td className="text-xs md:text-sm pl-2  uppercase font-normal">
            {display?.resoluation}
          </td>
        </tr>
        <tr className="text-left">
          <td className="text-base md:text-lg   capitalize font-semibold">
            {" "}
            aspect ratio{" "}
          </td>
          <td className="text-xs md:text-sm pl-2 uppercase font-normal">
            {display?.aspectratio}
          </td>
        </tr>
        <tr>
          <td className="text-base md:text-lg  capitalize font-semibold">
            screensize{" "}
          </td>
          <td className="text-xs md:text-sm pl-2 uppercase font-normal">
            {display?.screensize}
          </td>
        </tr>
        <tr>
          <td className="text-base md:text-lg  capitalize font-semibold">
            refrash rate{" "}
          </td>
          <td className="text-xs md:text-sm pl-2 uppercase font-normal">
            {display?.refrashrate}
          </td>
        </tr>
      </table>
    </div>
  </div>
  )
}

export default Displaysection