import React from 'react'

function Storagesection({storage}) {
  console.log(storage)
  return (
    <div className="w-full mt-6 ">
          <p className="text-xl md:text-2xl border-l-2 border-black pl-2 uppercase font-bold">
            storage
          </p>
          <div className="w-full text-left grid place-items-center my-5">
            <table className="w-full md:w-[70%] divide-y divide-gray-300">
              <tr className="pb-2">
                <td className="text-base md:text-lg w-32 capitalize font-semibold ">
                  memory
                </td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal w-full md:w-1/2">
                  {storage?.memory}
                </td>
              </tr>
              <tr>
                <td className="text-base md:text-lg  capitalize font-semibold">
                  stroage type{" "}
                </td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal">
                {storage?.strogetype}
                </td>
              </tr>
              <tr className="text-left">
                <td className="text-base md:text-lg  capitalize font-semibold">
                  {" "}
                 otg{" "}
                </td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal">
                {storage?.otg}
                </td>
              </tr>
              <tr>
                <td className="text-base md:text-lg  capitalize font-semibold">
                  expandable{" "}
                </td>
                <td className="text-xs md:text-sm pl-2 uppercase font-normal">
                {storage?.expandable}
                </td>
              </tr>
            </table>
          </div>
        </div>
  )
}

export default Storagesection