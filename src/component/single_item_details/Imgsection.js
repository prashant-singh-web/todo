import React from "react";

function Imgsection({ src }) {
  
  
  return (
    <div className="full flex flex-col justify-center">
      
      <div className="w-full grid place-items-center">
        <img
          src={`/mobile/${src[0]}`}
          alt="hii"
          className="w-[200px] h-[300px] object-cover p-10"
        />
      </div>
      <div className="w-full h-[200px] mx-auto xsm:w-[90%] md:w-[70%] lg:w-1/2 grid grid-cols-3 gap-x-5 px-2">
        {src &&
          src?.map((data, i) => {
            return (
              <div
                key={i}
                className="w-full h-[200px] xsm:h-28 overflow-hidden p-4 shadow-[0_0_1px_black]"
              >
                <img
                
                  src={ `/mobile/${data}`}
                  alt="hii"
                  className="w-full h-full  object-contain duration-200 ease-in-out hover:scale-125 "
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Imgsection;
