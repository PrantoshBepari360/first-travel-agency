import React, { useState } from 'react'
import list from './list.json'
import {HiChevronDown}  from "react-icons/hi";


 
const ReUseNav = ({manuName,id}) => {
    const [isOpen, SetIsOpen] = useState(false)
    // const [isDropdownOpen, SetDropdownOpen] = useState(false)

    return (
        <div className='relative'>

            <button onClick={() => SetIsOpen((prev) => !prev)} className='flex transition justify-between hover:text-white '>
                {manuName.manuNmae}{<HiChevronDown className='ml-2 mt-2' />}</button>
            {isOpen && <div className='mt-8 absolute z-10 opacity-60'>
                {list.map((item, i) => (
                    <div className=' bg-black text-gray-400 hover:text-white p-1 w-40 '>
                        <h3 className='mt-2'>{item.mainmanu}</h3>
                    </div>


                ))}
 

            </div>}
        </div>

    )
}
export default ReUseNav