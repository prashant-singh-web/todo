import React from "react";

import Imgsection from "./single_item_details/Imgsection";
import Maindata from "./single_item_details/Maindata";
import Displaysection from "./single_item_details/Displaysection";
import Processorsection from "./single_item_details/Processorsection";
import Camerasection from "./single_item_details/Camerasection";
import Designsection from "./single_item_details/Designsection";
import Storagesection from "./single_item_details/Storagesection";
import Multimediasection from "./single_item_details/Multimediasection";
import Sencersection from "./single_item_details/Sencersection";
import Networksection from "./single_item_details/Networksection";
import Batterysections from "./single_item_details/Batterysections"
import Reletedmobiles from "./single_item_details/Reletedmobiles";

function SingleItem({ data }) {
  console.log(data);
  const { name, src, relectedmobile } = data[0] || [] ;
  

  // const {
  //   battery,
  //   camera,
  //   display,
  //   design,
  //   maindata,
  //   multimedia,
  //   network,
  //   performance,
  //   senser,
  //   stroage,
  // } = data[0]?.keyspecification?.;
  
  return (
    <div className="w-full flex flex-col my-5 py-5 px-3 mx-auto lg:max-w-[1000px]">
      <div className="w-full grid grid-cols-2 xsm:grid-cols-1 lg:grid-cols-2 py-5 ">
        <Imgsection src={src} />
        <Maindata name={name} maindata={data[0]?.keyspecification?.maindata} />
      </div>
      <div className="w-full my-10 p-5 flex flex-col ">
        {/* all mobile details */}
        <p className="text-xl font-semibold uppercase border-b border-black pb-2">
          all details
        </p>
        {/* display detail */}
        <Displaysection display={data[0]?.keyspecification?.display}/>
        {/* processor detail */}
        <Processorsection performance={data[0]?.keyspecification?.performance}/>
        {/* camera detail */}
        <Camerasection camera={data[0]?.keyspecification?.camera}/>
        {/* design details */}
        <Designsection design={data[0]?.keyspecification?.design}/>
        {/* storage details */}
        <Storagesection storage={data[0]?.keyspecification?.stroage}/>
        {/* multimedia details */}
        <Multimediasection multimedia={data[0]?.keyspecification?.multimedia} />
        {/* senser details */}
        <Sencersection senser={data[0]?.keyspecification?.senser} />
        {/* network details */}
        <Networksection network={data[0]?.keyspecification?.network}/>
        {/* battery details */}
        <Batterysections battery={data[0]?.keyspecification?.battery}/>
      
      </div>
     
     {relectedmobile ?  <div className="w-full my-10 p-5 flex flex-col shadow-[0_0_25px_0_#ccc]">
          <Reletedmobiles reletedmobile={relectedmobile}/>
      </div> : ""}
      
    </div>
  );
}

export default SingleItem;
