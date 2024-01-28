import React from 'react'
import { NavLink } from 'react-router-dom';

function FilterItems({filterdata}) {
  return (
    <div className="div grid grid-cols-2 gap-10">
    {filterdata?.map((item) => {
return (
  <div className="group w-full flex flex-row border-black border rounded-md">
    <div className="w-full py-5 h-[200px]">
      <img
        src={item?.src[0]}
        alt="alt"
        className="w-full h-full object-contain group-hover:scale-90"
      />
    </div>
    <div className="w-full flex flex-col px-2 py-2 relative">
      <p className="text-xl font-semibold uppercase line-clamp-1">{item?.name}</p>
      <p className="texl-xs">5/{item?.review}</p>
      <p className="text-sm font-medium line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ratione.</p>
      <button className="py-1 text-md capitalize absolute bottom-[30px] right-[30px] px-3 rounded-lg bg-green-500 w-fit"><NavLink to={`/itemdetail/${item.id}`} >know more</NavLink></button>
    </div>
  </div>
);
})}
    </div>
  )
}

export default FilterItems