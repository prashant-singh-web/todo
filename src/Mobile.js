// import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import singleInfo from './json/mobileData.json'



import SingleItem from './component/SingleItem';

function Mobile() {
  const [singleinfo, setSingleinfo] = useState()

 const {id} = useParams();
console.log(id)
 console.log("getItem")


useEffect(()=>{
const getSingleProduct = singleInfo.filter(item => item.id === id)
setSingleinfo(getSingleProduct)

},[id])
 

const windowScroll = () =>{
  window.scrollTo(0,0)
}
  window.onload = windowScroll

  // console.log(singleData)
  // console.log(camera)
  
  return (
    <div className="w-full">
       {singleinfo ? <SingleItem data={singleinfo}/> : <div>Loading...</div>}
    </div>
  )
  
}

export default Mobile