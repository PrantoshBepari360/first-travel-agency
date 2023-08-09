import React, { useState } from 'react'
import list from './list.json'
import {HiChevronDown}  from "react-icons/hi";

const Home = () => {
    const [isOpen, SetIsOpen] = useState(false)
    return (
        <div className='relative'>

            <button onClick={() => SetIsOpen((prev) => !prev)} className='flex transition justify-between hover:text-white active:text-red-400 hover:{() => SetIsOpen((prev) => !prev)}'>
                Home{<HiChevronDown className='h-8 ml-5' />}</button>
            {isOpen && <div className='mt-6 absolute z-10'>
                {list.map((item, i) => (
                    <div className=' bg-black text-gray-400 hover:text-white p-1 w-40 '>
                        <h3 className='mt-2'>{item.mainmanu}</h3>
                    </div>
                ))}
 

            </div>}
        </div>

    )
}

export default Home