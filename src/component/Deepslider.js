import React, {  useRef } from "react";
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from "react-icons/ai"


function Deepslider() {
    
    const sliderRef = useRef();
      const story_matter = [
        {
            id: 1,
            time: "1 day ago",
            title: "best phone to buy these season",
            url:"img/flipkart.webp"
        },
        {
            id: 1,
            time: "1 day ago",
            title: "best phone to buy these season",
            url:"img/flipkart.webp"
        },
        {
            id: 1,
            time: "1 day ago",
            title: "best phone to buy these season",
            url:"img/flipkart.webp"
        },
        {
            id: 1,
            time: "1 day ago",
            title: "best phone to buy these season",
            url:"img/flipkart.webp"
        },
        {
            id: 1,
            time: "1 day ago",
            title: "best phone to buy these season",
            url:"img/flipkart.webp"
        },
        {
            id: 1,
            time: "1 day ago",
            title: "best phone to buy these season",
            url:"img/flipkart.webp"
        },
        {
            id: 1,
            time: "1 day ago",
            title: "best phone to buy these season",
            url:"img/flipkart.webp"
        },
        {
            id: 1,
            time: "1 day ago",
            title: "best phone to buy these season",
            url:"img/flipkart.webp"
        },
        {
            id: 1,
            time: "1 day ago",
            title: "best phone to buy these season",
            url:"img/flipkart.webp"
        },
      ]

    const dta = () =>{
        sliderRef.current.scrollLeft += 200;
    };
    const data = () =>{
        sliderRef.current.scrollLeft += -200;
    };

     
    //  console.log(scrollright)
    
  return (
 <div className="w-full h-auto bg-white grid place-items-center relative ovflow-hidden px-5">
         <h1 className="w-full text-left text-black text-2xl font-semibold capitalize">stories that matter</h1>
        <div ref={sliderRef} className=" slider w-full h-auto bg-white flex flex-row overflow-hidden p-2 overflow-x-scroll">
            {
                story_matter.map((item,i)=>{
                    return(
                        <div key={i} className="min-w-[250px] mr-3 h-[250px] bg-white shadow-[0_0_2px_black] overflow-hidden hover:border-[1px] hover:border-orange-500 hover:shadow-[0_0_4px_black]  ">
                            <img src={item.url} alt="" className="h-[150px] w-full object- object-cover" />
                            <p className="pl-3 mt-1 text-gray-500">{item.time}</p>
                            <p className="pl-3 mt-1 text-black font-semibold capitalize hover:text-gray-500">{item.title}</p>
                        </div>
                    )
                })
            }
            
        </div>
        <AiOutlineDoubleLeft className="absolute top-[50%] left-1 cursor-pointer bg-transparent h-8 w-8 rounded-full bg-gray-200 p-2 border border-black transition-all hover:shadow-[0_0_5px_black]" onClick={data}/>
        <AiOutlineDoubleRight className="absolute top-[50%] right-1 cursor-pointer bg-transparent h-8 w-8 rounded-full bg-gray-300 p-2 border border-black transition-all hover:shadow-[0_0_5px_black]" onClick={dta}/>
 </div>
  );
}

export default Deepslider;