import React, { useState } from 'react'
import list from './list.json'
import { HiChevronDown } from "react-icons/hi";


const Blogs = () => {
     const [isOpen ,SetIsOpen] = useState(false)
  return (
    <div className='relative'>
         
         <button onClick={()=>SetIsOpen((prev)=>!prev)} className=' flex justify-between hover:text-white'>Blogs{<HiChevronDown className='ml-2 mt-2' />}
</button>
         {isOpen && <div className='mt-8 z-10 absolute opacity-60'>
            {list.map((item,i)=>(
                <div className=' bg-black text-gray-400 hover:text-white p-1 w-40'>
                    <h3 className='mt-2'>{item.manuName}</h3>
                </div>
            ))}
            
            
            </div>}
    </div>
   
  )
}

export default Blogs