import React from 'react'
import Footersub from './Footersub'
import Footercaption from './Footercaption'
import Footermedium from './Footermedium'

function Footer() {
  return (
    <div className='w-full bg-[#262626] '>
        <Footersub/>
        <Footermedium/>
        <Footercaption/>
       </div>
  )
}

export default Footer