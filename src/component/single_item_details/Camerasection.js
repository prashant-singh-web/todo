import React from 'react'

function Camerasection({camera}) {
  
  return (
    <div className="w-full">
          <p className="text-2xl border-l-2 border-black pl-2 uppercase font-bold">camera</p>
          <div className="div m-6">
            <p className="text-lg border-l-2 border-black pl-2 uppercase font-bold">rear camera</p>
            <div className="w-full text-left grid place-items-center">
            <table className="w-full md:w-[70%] divide-y divide-gray-300 my-5 ">
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg  capitalize font-semibold w-32">
                Resolution
                </td>
                <td className="text-xs md:text-sm uppercase font-normal w-64 md:w-1/2">
                  {camera?.maincamera?.Resolution[0]} <br /> {camera?.maincamera?.Resolution[1]} <br />{camera?.maincamera?.Resolution[2]}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg  capitalize font-semibold">
                camera setup{" "}
                </td>
                <td className="text-xs md:text-sm uppercase font-normal">
                {camera?.maincamera?.camerasetup}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg  capitalize font-semibold">
                  {" "}
                  flash{" "}
                </td>
                <td className="text-xs md:text-sm uppercase font-normal">
                {camera?.maincamera?.flesh}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg  capitalize font-semibold">
                image resolution{" "}
                </td>
                <td className="text-xs md:text-sm uppercase font-normal">
                {camera?.maincamera?.imgresolution}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg  uppercase font-semibold">
                  ois{" "}
                </td>
                <td className="text-xs md:text-sm uppercase font-normal">
                {camera?.maincamera?.ois}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg   capitalize font-semibold">
                vidoe recording{" "}
                </td>
                <td className="text-xs md:text-sm uppercase font-normal">
                {camera?.maincamera?.vidoerecording[0]} <br/> {camera?.maincamera?.vidoerecording[1]}
                </td>
              </tr>
            </table>
          </div>
          </div>
          <div className="div m-3">
            <p className="text-base md:text-lg  border-l-2 border-black pl-2 uppercase font-bold">front camera</p>
            <div className="w-full text-left grid place-items-center">
            <table className="w-full md:w-[70%] divide-y divide-gray-300 my-5 ">
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg w-32 capitalize font-semibold">
                Resolution
                </td>
                <td className="text-xs md:text-sm uppercase font-normal w-64 md:w-1/2">
                  {camera?.frontcamera?.Resolution}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg  capitalize font-semibold">
                camera setup{" "}
                </td>
                <td className="text-xs md:text-sm uppercase font-normal">
                {camera?.frontcamera?.camerasetup}
                </td>
              </tr>
              <tr className=' align-text-top'>
                <td className="text-base md:text-lg   capitalize font-semibold">
                vidoe recording{" "}
                </td>
                <td className="text-xs md:text-sm uppercase font-normal">
                {camera?.frontcamera?.vidoerecording[0]} <br/> {camera?.maincamera?.vidoerecording[1]}
                </td>
              </tr>
            </table>
          </div>
          </div>
        </div>
  )
}

export default Camerasection