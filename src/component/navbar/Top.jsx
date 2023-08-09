import React from 'react'
import LangDrop from './LangDrop/LangDrop'
import { HiPhone } from "react-icons/hi";
import { AiOutlineFacebook,AiOutlineInstagram,AiFillLinkedin,AiOutlineGithub,AiOutlineDribbbleSquare } from "react-icons/ai"


const Top = () => {
  return (
    <div className=' bg-blue-400 w-[78rem] mx-auto p-6 flex flex- justify-between'>

      <div className='flex justify-between '>
        <h3 className='text-white mr-8 '>Fllow us:</h3>
        <div>
          <ul className="flex justify-center space-x-5 ">
            <li>
              <a href="#" class="text-white hover:text-gray-900  dark:hover:text-white dark:text-gray-400">
              <AiOutlineFacebook className='mt-1 w-6 h-6 '/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <AiOutlineInstagram className='mt-1 w-6 h-6'/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <AiFillLinkedin className='mt-1 w-6 h-6'/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <AiOutlineGithub className='mt-1 w-6 h-6'/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <AiOutlineDribbbleSquare className='mt-1 w-6 h-6'/>
              </a>
            </li>
          </ul>
        </div>

        <p className='text-white ml-8  flex '>{<HiPhone className='mr-2 '/>}01740354026</p>
      </div>
      <div className='flex'>
        <LangDrop/>

        <h3 className='ml-8'>SIGN IN</h3>

      </div>

    </div>
  )
}

export default Top