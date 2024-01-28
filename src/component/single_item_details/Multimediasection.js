import React from 'react'

function Multimediasection({multimedia}) {
  return (
    <div className="w-full mt-6 ">
          <p className="text-xl md:text-2xl border-l-2 border-black pl-2 uppercase font-bold">
           multimedia
          </p>
          <div className="w-full text-left grid place-items-center">
            <table className="w-full md:w-[70%] divide-y divide-gray-300 text-start my-5">
              <tr className="pb-2 text-start ">
                <td className="text-lg capitalize font-semibold w-32">
                radio fm
                </td>
                <td className="text-md pl-2 uppercase font-normal ml-2 w-full md:w-1/2">
                  {multimedia?.fm}
                </td>
              </tr>
              <tr>
                <td className="text-lg capitalize font-semibold">
                  streao speaker{" "}
                </td>
                <td className="text-md pl-2 uppercase font-normal">
                {multimedia?.streo}
                </td>
              </tr>
              <tr className="text-left">
                <td className="text-lg capitalize font-semibold">
                  {" "}
                  loudspeaker{" "}
                </td>
                <td className="text-md pl-2 uppercase font-normal">
                {multimedia?.loudspeaker}
                </td>
              </tr>
              <tr>
                <td className="text-lg capitalize font-semibold">
                  audio jack{" "}
                </td>
                <td className="text-md pl-2 uppercase font-normal">
                {multimedia?.audiojack}
                </td>
              </tr>
            </table>
          </div>
        </div>
  )
}

export default Multimediasection