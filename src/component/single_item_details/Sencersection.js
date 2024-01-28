import React from 'react'

function Sencersection({senser}) {
  console.log(senser)
  return (
    <div className="w-full mt-6 ">
      <p className="text-2xl border-l-2 border-black pl-2 uppercase font-bold">
        senser
      </p>
      <div className="w-full text-left grid place-items-center">
        <table className="w-full md:w-[70%] divide-y divide-gray-300">
          <tr className=' align-text-top'>
            <td className="text-base md:text-lg w-32 capitalize font-semibold ">
            fingerprint senser
            </td>
            <td className="text-xs md:text-sm pl-2 uppercase font-normal w-full md:w-1/2">
              { senser?.fingerprint}
            </td>
          </tr>
          <tr className=' align-text-top'>
            <td className="text-base md:text-lg capitalize font-semibold">other senser </td>
            <td className="text-xs md:text-sm pl-2 uppercase font-normal">
              {senser?.othersencer }
            </td>
          </tr>
         
        </table>
      </div>
    </div>
  )
}

export default Sencersection