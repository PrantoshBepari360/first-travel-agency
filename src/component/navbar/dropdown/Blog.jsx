import React, { useState } from 'react'
import list from './list.json'
import { HiChevronDown } from "react-icons/hi";


const Blogs = () => {
     const [isOpen ,SetIsOpen] = useState(false)
  return (
    <div className='relative'>
         
         <button onClick={()=>SetIsOpen((prev)=>!prev)} className=' flex justify-between hover:text-white active:text-red-400'>Blogs{<HiChevronDown className='h-8 ml-2' />}
</button>
         {isOpen && <div className='mt-6 z-10 absolute'>
            {list.map((item,i)=>(
                <div className=' bg-black text-gray-400 hover:text-white p-1 w-40'>
                    <h3 className='mt-2'>{item.mainmanu}</h3>
                </div>
            ))}
            
            
            </div>}
    </div>
   
  )
}

export default Blogs