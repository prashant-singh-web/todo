import React from "react";

import { NavLink } from "react-router-dom";
import tabletData from './json/mobileData.json'

function Tablet() {
  
  // const [tab, setTab] = useState()


  return (
    <div className="w-full grid place-items-center">

      <div className="w-[1000px] grid grid-cols-2 gap-10 my-10">
        {tabletData?.filter((item)=>item.tablet === 'true').map((item) => {
          return (
            <div className="w-full grid grid-cols-2 shadow-[0px_0px_5px_black]">
              <div className="w-full py-5 h-[200px]">
                <img
                  src={`/mobile/${item?.src[0]}`}
                  alt="alt"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full flex flex-col px-2 py-2 relative">
                <p className="text-xl font-semibold uppercase line-clamp-2">{item?.name}</p>
                <p className="texl-xs">5/{item?.review}</p>
                <p className="text-sm font-medium line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ratione.</p>
                <button className="py-1 text-md capitalize absolute bottom-[30px] right-[30px] px-3 rounded-lg bg-green-500 w-fit"><NavLink to={`/itemdetail/${item.id}`} >know more</NavLink></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tablet;
