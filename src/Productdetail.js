import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import SingleItem from './component/SingleItem';
import singleInfo from './json/mobileData.json'


function Productdetail() {
 const [singleinfo, setSingleinfo] = useState()

 const {id} = useParams();
console.log(id)
 console.log("getItem")


useEffect(()=>{
const getSingleProduct = singleInfo.filter(item => item.id === id)
setSingleinfo(getSingleProduct)
console.log(getSingleProduct)

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

export default Productdetail