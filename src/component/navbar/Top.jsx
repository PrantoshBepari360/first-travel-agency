import React from 'react'
import LangDrop from './LangDrop/LangDrop'
import { HiPhone } from "react-icons/hi";
import { AiOutlineFacebook,AiOutlineInstagram,AiFillLinkedin,AiOutlineGithub,AiOutlineDribbbleSquare } from "react-icons/ai"


const Top = () => {
  return (
    <div className=' bg-topColor'>
      <div className=' flex justify-between bg-topColor w-[78rem] mx-auto pt-2 pr-6 pl-6 pb-14'>

      <div className='flex justify-between '>
        <h3 className='text-white mr-6 '>Follow us:</h3>
        <div>
          <ul className="flex justify-center ">
            <li>
              <a href="#" class="text-white hover:text-gray-900  dark:hover:text-white dark:text-gray-400">
              <AiOutlineFacebook className='w-6 h-6 mr-4 color-white '/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <AiOutlineInstagram className='mr-4 w-6 h-6 '/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <AiFillLinkedin className='mr-4 w-6 h-6'/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <AiOutlineGithub className='mr-4 w-6 h-6'/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <AiOutlineDribbbleSquare className='mr-4 w-6 h-6'/>
              </a>
            </li>
          </ul>
        </div>

        <p className='text-white ml-5 flex '>{<HiPhone className='mr-2 '/>}01740354026</p>
      </div>
      <div className='flex'>
        <LangDrop/>

        <h3 className='ml-8'>SIGN IN</h3>

      </div>

    </div>
    </div>
    
  )
}

export default Top