import React from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

function EachNoteList() {
    
  return (
    <div className="w-full border-b-2 flex flex-row justify-between p-2 ">
            <div className="flex flex-col">
                <h2 className='text-lg font-semibold text-black/80'>Notes Title Here...</h2>
                <p className='text-sm text-black/80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, voluptatum.....</p>
            </div>
            <div className="relative">
                <HiOutlineDotsVertical/>
                <div  className={`absolute  rounded-md before:p-2 before:absolute before:bg-white before:-top-1 before:left-4 before:rotate-45  top-[25px] -left-4 w-32 shadow-[0px_9px_28px_8px_#0000000D,0px_6px_16px_0px_#00000014,0px_3px_6px_-4px_#0000001F]  bg-white`}>
            <div className="w-full flex flex-col  mt-2 relative z-10">
              <button className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100">
                Completed
              </button>
              <button className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100">
                Favourites
              </button>
              <button className="text-sm text-black/90 py-2 text-left px-4 hover:bg-gray-100">
                Deleted
              </button>
            </div>
          </div>
            </div>
        </div>
  )
}

export default EachNoteList