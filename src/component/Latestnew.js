import React from "react";
import moto from "../helper/img/moto.webp";
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import { useRef } from "react";

function Latestnew() {
  const latestnewSlider = useRef();
  
  let scrollRight =()=>{
    
    return(
      latestnewSlider.current.scrollLeft += 10
    )
  }
  let scrollLeft =()=>{
    return(
      latestnewSlider.current.scrollLeft -= latestnewSlider.current.clientWidth
    )
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 px-4 py-5 gap-3  bg-[#FFFFFF]">
      <div className="w-full ">
        <p className="text-[25px] font-semibold capitalize ">latest news</p>
        <div className="w-full border-[0.5px] border-gray-300 px-3 py-2 rounded-lg">
          <img src={moto} alt="" className="w-full h-fit md:h-[300px]" />
          <p className="cap capitalize text-sm text-gray-500">1 hour ago</p>
          <p className="f font-bold text-[#363535]">
            Moto E13 now available in India in a 'Sky Blue' colour variant, and
            at a special discounted price
          </p>
        </div>
      </div>
      <div className="w-full  ">
        <p className="text-xl mb-2 font-semibold capitalize w-full text-center">
          latest news
        </p>
        <div ref={latestnewSlider}  className="w-full h-auto border rounded-md border-gray-300 p-3">
          <div  className="latestpart w-full h-full flex flex-row border-0 rounded-md overflow-x-scroll scroll-smooth">
            <div className="min-w-full h-full border-0 rounded-md grid grid-rows-3 overflow-hidden py-1 px-1 gap-y-2 ">
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className=" w-full md:w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div  className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className=" w-full md:w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className=" w-full md:w-[150px] h-full bg-white object-contain"
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
            <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className=" w-full md:w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className=" w-full md:w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className=" w-full md:w-[150px] h-full bg-white object-contain"
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
            <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className=" w-full md:w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className=" w-full md:w-[150px] h-full bg-white object-contain"
                />
                <div className="w-full flex flex-col pr-9 py-3 pl-2 bg-white">
                  <p className="text-sm text-gray-500">1 Hour ago</p>
                  <p className="text-sm font-semibold">
                    Apple MacBook Air M1 price in India discounted by Rs 30,000
                    on Amazon: should you buy?
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-slate-300 border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row">
                <img
                  src="img/Apple.webp"
                  alt=""
                  className=" w-full md:w-[150px] h-full bg-white object-contain"
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
             <AiOutlineLeft className="font-bold text-lg text-black hover:text-gray-600" onClick={scrollLeft}/>
             <AiOutlineRight className="font-bold text-lg text-black hover:text-gray-600" onClick={scrollRight}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Latestnew;
