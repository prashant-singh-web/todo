import React, { useRef } from "react";
import moto from "../helper/img/moto.webp";
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'

function Latestreviews() {
  const latestSlider = useRef();
  let scrollRight =()=>{
    return(
      latestSlider.current.scrollLeft += 430
    )
  }
  let scrollLeft =()=>{
    return(
      latestSlider.current.scrollLeft -= 430
    )
  }
  return (
    <div className="w-full grid-cols-2 px-4 py-5 gap-3  bg-[#FFFFFF] hidden lg:grid">
      <div className="w-full ">
        <p className="text-[25px] font-semibold capitalize mb-3 ">Latest reviews</p>
        <div className="w-full border-[0.5px] border-gray-300 px-3 py-2 rounded-lg">
          <img src={moto} alt="" className="w-full h-[300px]" />
          <p className="cap capitalize text-sm text-gray-500">1 hour ago</p>
          <p className="f font-bold text-[#363535]">
            Moto E13 now available in India in a 'Sky Blue' colour variant, and
            at a special discounted price
          </p>
        </div>
      </div>
      <div className="w-full pt-4">
        <p className="text-[15px] font-semibold capitalize w-full text-orange-500 mb-3 text-end">
          latest news
        </p>
        <div className="w-full h-auto border rounded-md bg-white border-gray-300 p-3">
          <div ref={latestSlider} className="latestnews w-full h-full bg-white flex flex-row border-0 rounded-md overflow-x-scroll scroll-smooth  ">
            <div className="min-w-full bg-white  h-full rounded-md grid grid-rows-3 overflow-hidden border-0 p-1 gap-y-2 ">
              <div className="w-full h-full  border border-gray-300 rounded-md overflow-hidden flex flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className="w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className="w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className="w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              
            </div>
            <div className="min-w-full h-full border-0 rounded-md grid grid-rows-3 overflow-hidden py-1 px-1 gap-y-2 ">
            <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className="w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className="w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className="w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-full h-full border-0 rounded-md grid grid-rows-3 overflow-hidden py-1 px-1 gap-y-2 ">
            <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className="w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className="w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className="w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
            </div>
           
          </div>
          <div className="full flex  justify-around">
             <AiOutlineLeft className="font-bold text-lg text-black cursor-pointer hover:text-gray-600" onClick={scrollLeft}/>
             <AiOutlineRight className="font-bold text-lg text-black hover:text-gray-600" onClick={scrollRight}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Latestreviews;