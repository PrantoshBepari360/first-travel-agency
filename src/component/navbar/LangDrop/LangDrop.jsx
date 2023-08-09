import React, { useState } from 'react'
import city from './city.json'

const LangDrop = () => {
    const [isOpen, SetIsOpen] = useState(false)
    return (
        <div className='relative'>

            <button onClick={() => SetIsOpen((prev) => !prev)} className=' active:text-red-400'>English</button>
            {isOpen && <div className='mt-2 absolute'>
                {city.map((item, i) => (
                    <div className=' bg-black text-white p-2 w-40 z-30 absolute'>
                        <h3 className='mt-1'>{item.cityLanguage}</h3>
                    </div>
                ))}


            </div>}
        </div>

    )
}

export default LangDrop