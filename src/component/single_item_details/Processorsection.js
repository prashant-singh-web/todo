import React from 'react'

function Processorsection({performance}) {
  return (
    <div className="w-full">
          <p className="text-xl md:text-2xl border-l-2 border-black pl-2 uppercase font-bold">performance</p>
          <div className="w-full text-left grid place-items-center my-5">
            <table className="w-full md:w-[70%] divide-y divide-gray-300 ">
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg capitalize font-semibold ">chipset</td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal w-64 md:w-1/2">
                  {performance?.chipset}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base  md:text-lg  capitalize font-semibold">cpu </td>
                <td className="text-xs md:text-sm pl-2 overflow-ellipsis uppercase font-normal ">
                  {performance?.cpu}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg capitalize font-semibold">
                  {" "}
                  Architecture{" "}
                </td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal">
                  {performance?.Architecture}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg capitalize font-semibold">
                fabrication{" "}
                </td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal">
                  {performance?.fabrication}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg capitalize font-semibold">
                graphics{" "}
                </td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal">
                  {performance?.graphics}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg capitalize font-semibold">
                  ram{" "}
                </td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal">
                  {performance?.ram}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg capitalize font-semibold">
                  ram type{" "}
                </td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal">
                  {performance?.ramtype}
                </td>
              </tr>
            </table>
          </div>
        </div>
  )
}

export default Processorsection