import React from 'react'
import {BsFillHandThumbsUpFill} from 'react-icons/bs'
import {FaFacebookF,FaTwitter} from 'react-icons/fa'
import {MdRssFeed} from 'react-icons/md'
import {ImMail3} from 'react-icons/im'
import {AiFillYoutube} from 'react-icons/ai'

function Footersub() {
  return (
    <div className='bg-[#3C3C3C] flex justify-center py-3 xsm:hidden md:flex'>
        <p className='text-orange-700 font-bold text-base pr-2'>Subscribe for top stories, new launches & expert reviews!</p>
        <div className="div flex justify-center h-[30px]">
            <input type="email" className='w-[250px] outline-none border-0 h-full pl-3 placeholder:text-gray-500 placeholder:capitalize placeholder:pl-3' placeholder='your email address' />
            <BsFillHandThumbsUpFill className='bg-[#5E5E5E] text-gray-300 hover:text-white w-[30px] text-lg h-full p-1 px-2'/>
        </div>
        <div className="w-auto flex justify-center items-center">
        <FaFacebookF className='text-2xl my-1 mx-2 text-[#5e5e5e] cursor-pointer'/>
        <FaTwitter className='text-2xl my-1 mx-2 text-[#5e5e5e] cursor-pointer'/>
        <MdRssFeed className='text-2xl my-1 mx-2 text-[#5e5e5e] cursor-pointer'/>
        <ImMail3 className='text-2xl my-1 mx-2 text-[#5e5e5e] cursor-pointer'/>
        <AiFillYoutube className='text-2xl my-1 mx-2 text-[#5e5e5e] cursor-pointer'/>
        </div>
    </div>
  )
}

export default Footersub