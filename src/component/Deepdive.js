import React from 'react'

function Deepdive() {
    const deep_img = [
        {
            id: 1,
            url: "img/laptop.webp"
        },
        {
            id: 2,
            url: "img/game.webp"
        },
        {
            id: 3,
            url: "img/deal.webp"
        },
        {
            id: 4,
            url: "img/personal.webp"
        },
    ]
  return (
    <div className="w-full flex flex-col py-5 bg-white px-5">
        <p className='text-2xl font-semibold capitalize mb-4'>deep dive</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-3">
            {
                deep_img.map((data)=>{
                    return(
                        <div className="w-full h-[250px] "key={data.id}>
                            <img src={data.url} alt="d" className='w-full h-full object-contain' />
                        </div>
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default Deepdive