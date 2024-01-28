import React, {  useContext, useRef} from "react";
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from "react-icons/ai"
import { Appcontext } from "../context/contextProvider";
import {NavLink} from "react-router-dom"
import mobileJson from '.././json/mobileData.json'


function Upcomingmobile() {
    // const[mobileData,setMobileData] = useState()
    const {getData} = useContext(Appcontext);
    
    console.log(getData);
 console.log(mobileJson)
    
    
    const sliderRef = useRef();
   

    const dta = () =>{
        sliderRef.current.scrollLeft += 200;
    };
    const data = () =>{
        sliderRef.current.scrollLeft += -200;
    };

     
    //  console.log(scrollright)
    
  return (
    <div className="w-full h-auto bg-white grid place-items-center relative ovflow-hidden px-5">
    <h1 className="w-full text-left text-black text-2xl font-semibold capitalize">upcoming mobile</h1>
   <div ref={sliderRef} className=" slider snap-x w-full h-auto bg-white flex flex-row overflow-hidden p-2 overflow-x-scroll">
       {
          mobileJson.filter((item)=>item.category === 'mobile').map((item,i)=>{
               return(
                   <NavLink  key={i} to={`mobile/${item.id}`}>
                       <div className="group snap-center min-w-[250px] mr-3 h-[300px] flex flex-col bg-white shadow-[0_0_4px_black] overflow-x-hidden hover:border-[1px] relative hover:border-orange-500 hover:shadow-[0_0_4px_orange]  ">
                       <div className="w-[50px] h-[50px] absolute top-0 left-0 bg-green-500 z-40 flex flex-col text-center  text-white">
                           <p className="text-lg font-bold">91%</p>
                           <p className="text-xs line-clamp-2 ">spec score</p>
                          
                       </div>
                      <div className="div h-full w-full flex flex-col justify-center items-center">
                      <img src={`/mobile/${item?.src[0]}`} alt="jj" className="h-[150px] w-[100px]  object-cover" />
                       <p className="pl-3 mt-1 text-gray-500">{item?.name}</p>
                       <p className="pl-3 mt-1 text-orange-500 font-semibold capitalize hover:text-gray-500">{item?.price}</p>
                      </div>
                      <button className="w-full text-center text-md capitalize text-black bg-gray-500  py-2 group-hover:bg-[#FF5A00] group-hover:text-white ">views details</button>
                   </div>
                   </NavLink>
               )
           })
       }
       
   </div>
   <AiOutlineDoubleLeft className="absolute top-[50%] left-1 cursor-pointer h-8 w-8 rounded-full bg-[rgba(0,0,0,0.2)] p-2 border border-black transition-all hover:shadow-[0_0_5px_black]" onClick={data}/>
   <AiOutlineDoubleRight className="absolute top-[50%] right-1 cursor-pointer h-8 w-8 rounded-full bg-[rgba(0,0,0,0.2)] p-2 border border-black transition-all hover:shadow-[0_0_5px_black]" onClick={dta}/>
</div>
  );
}

export default Upcomingmobile