import React from 'react'
import {FaMobileScreen} from 'react-icons/fa6'
import {FaHeadphonesAlt} from 'react-icons/fa'
import {MdOutlineLaptopChromebook} from 'react-icons/md'
import {BsTabletLandscapeFill,BsSmartwatch} from 'react-icons/bs'
import {PiTelevisionSimpleDuotone} from 'react-icons/pi'
import {TbAirConditioning} from 'react-icons/tb'
import {CgSmartHomeRefrigerator} from 'react-icons/cg'
import {GiWashingMachine} from 'react-icons/gi'
import {BiSolidCamera} from 'react-icons/bi'
// import Mobile from '../Mobile'
import { NavLink } from 'react-router-dom'
// import Upcomingmobile from './Upcomingmobile'
// import { useEffect,useState } from 'react'
// import axios from 'axios'

function Catgory() {
    // const [dataa, setDataa] = useState([]);
    // useEffect(() => {
    //   axios.get('http://localhost:4000/sign/userAll').then((res) => {
    //     setDataa(res.data)
       
    //   })
    //   }
    // , [])
    // let newdata = dataa.filter((item) => {
    //     return (item.featured === true)
        
    // })
   
    // console.log(newdata)
   

    
    const catitem = [
        {
            
            "icon": <FaMobileScreen/>,
            "name": "mobile",
            "link": "/smartphone"
        },
        {
            "icon": <MdOutlineLaptopChromebook/>,
            "name": "laptop",
            "link": "/smartphone"
        },
        {
            "icon": <BsTabletLandscapeFill/>,
            "name": "tablet",
            "link": "/smartphone"
        },
        {
            "icon": <BsSmartwatch/>,
            "name": "smartwatch",
            "link": "/smartphone"
        },
        {
            "icon": <PiTelevisionSimpleDuotone/>,
            "name": "tv",
            "link": "/smartphone"
        },
        {
            "icon": <TbAirConditioning/>,
            "name": "ac",
            "link": "/smartphone"
        },
        {
            "icon": <FaHeadphonesAlt/>,
            "name": "headphones",
            "link": "/smartphone"
        },
        {
            "icon": <CgSmartHomeRefrigerator/>,
            "name": "refrigerator",
            "link": "/smartphone"
        },
        {
            "icon": <GiWashingMachine/>,
            "name": "washing machine",
            "link": "/smartphone"
        },
        {
            "icon": <BiSolidCamera/>,
            "name": "camera",
            "link": "/smartphone"
        },
     
    ]
  return (
    <div className='w-full flex flex-col justify-start py-3 px-4 bg-[#FFFFFF] shadow '>
        <p className='text-2xl text-black capitalize font-bold mb-4'>Top Categories</p>
        <div className="w-full grid grid-cols-10 overflow-hidden xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
            {
                catitem.map((catitem, i) =>{
                    return(
                      
                         <NavLink key={i} to={catitem.link}>
                             <div className="w-full h-[100px] cursor-pointer grid place-items-center overflow-hidden border border-gray-500 py-2 px-2 group" key={i}>
                            <div className=" text-4xl text-gray-500 group-hover:scale-95">{catitem.icon}</div>
                            <p className='text-xs capitalize mt-2 text-gray-500 text-ellipsis line-clamp-2 text-center'>{catitem.name}</p>
                        </div>
                         </NavLink>
                     
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Catgory