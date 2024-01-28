import React from "react";
import Pricefilter from "./component/Pricefilter";
import Catgory from "./component/Catgory";
import Latestnew from "./component/Latestnew";
import Latestreviews from "./component/Latestreviews";
import Deepslider from "./component/Deepslider";
import Deepdive from "./component/Deepdive";
import Upcomingmobile from "./component/Upcomingmobile";


function Home() {
 
  return (
    <div className="w-full grid place-items-center bg-[#ECECEC]">
      <div className="w-full lg:w-[950px]">
        <Pricefilter />
        <Catgory />
        <div className="w-full my-10 shadow-[0_0_25px_0_#ccc]">
          <Latestnew />
          <Deepslider />
          <Latestreviews />
          <Deepdive />
          <Latestreviews />
          <Upcomingmobile />
         
        </div>
      </div>
    </div>
  );
}

export default Home;
