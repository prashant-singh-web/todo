import React from 'react'

function Designsection({design}) {
  return (
    <div className="w-full mt-6 ">
          <p className="text-xl md:text-2xl border-l-2 border-black pl-2 uppercase font-bold">
            design
          </p>
          <div className="w-full text-left grid place-items-center my-5">
            <table className="w-full md:w-[70%] divide-y divide-gray-300 ">
              <tr className="pb-2">
                <td className="text-base  md:text-lg capitalize font-semibold ">
                  height
                </td>
                <td className="text-xs md:text-sm  uppercase font-normal w-64 md:w-1/2">
                  {design?.height}
                </td>
              </tr>
              <tr>
                <td className="text-base md:text-lg capitalize font-semibold">
                  width{" "}
                </td>
                <td className="text-xs md:text-sm  uppercase font-normal">
                {design?.width}
                </td>
              </tr>
              <tr className="text-left">
                <td className="text-base md:text-lg capitalize font-semibold">
                  {" "}
                  thick{" "}
                </td>
                <td className="text-xs md:text-sm  uppercase font-normal">
                {design?.thick}
                </td>
              </tr>
              <tr>
                <td className="text-base md:text-lg capitalize font-semibold">
                  weight{" "}
                </td>
                <td className="text-xs md:text-sm  uppercase font-normal">
                {design?.weight}
                </td>
              </tr>
            </table>
          </div>
        </div>
  )
}

export default Designsection