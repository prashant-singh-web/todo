
import React from 'react'

import { NavLink } from 'react-router-dom';
import mobileJson from './json/mobileData.json'

function Smartmobile() {
    
  return (
    <div className="w-full grid place-items-center">

    <div className="max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
      {mobileJson.filter((item)=>item.category === 'mobile').map((item,ind) => {
        return (
          <div className="w-full grid grid-cols-2 shadow" key={ind}>
            <div className="w-full py-5 h-[200px]">
              <img
                src={`/mobile/${item.src[0]}`}
                alt="product"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex flex-col px-2 py-2 relative">
              <p className="text-xl font-semibold uppercase">{item?.name}</p>
              <p className="texl-xs">5/{item?.review}</p>
              <p className="text-sm font-medium line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ratione.</p>
              <button className="py-1 text-md capitalize absolute bottom-[30px] right-[30px] px-3 rounded-lg bg-green-500 w-fit"><NavLink to={`/itemdetail/${item.id}`} >know more</NavLink></button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Smartmobile