import React from 'react'
import { Link } from 'react-router-dom'
import Home from './dropdown/Home'
import About from './dropdown/About'
import Tours from './dropdown/Tours'
import Shop from './dropdown/Shop'
import Blogs from './dropdown/Blog'
import Element from './dropdown/Elements'
import { HiMenu,HiOutlineClipboard,HiSearch} from "react-icons/hi";
import list from './dropdown/list.json'



// import Top from './Top'

const Bottom = ({mainmanu}) => {
    return (
        <div className='relative'>
            <div className=' w-full z-50 top-10 absolute'>
                <div className='flex justify-between mx-auto bg-green-400 p-6 w-[78rem] ' >
                <h2 className="bg-green-400 text-2xl"> helo i am bottom</h2>


                <div className=" flex   ">
                    <div className=' flex ' >
                        <Link to='/' className='mr-5 pb-6 hover:text-white ' >
                            <Home
                            item={list.mainmanu}
                            
                            />
                        </Link>
                        <Link to='/About' className='mr-5 hover:text-white'>
                            <About />
                        </Link>
                        <Link to='/Tours' className='mr-5 hover:text-white'>
                            <Tours />
                        </Link>
                        <Link to='/Shop' className='mr-5 hover:text-white'>
                            <Shop />
                        </Link>
                        <Link to='/Blogs' className='mr-5 hover:text-white'>
                            <Blogs />
                        </Link>
                        <Link to='/Element' className='mr-5 hover:text-white'>
                            <Element />
                        </Link>
                    </div>

                    <div className="flex-3  ">
                        <ul className="flex justify-center  space-x-5">
                            <li>
                                <a href="#" class="text-white hover:text-gray-900  dark:hover:text-white dark:text-gray-400">
                                    <HiOutlineClipboard className='absolute mt-1 w-6 h-6 border-r-2' /><span className='relative bg-blue-400 ml-3'>0</span>
                                
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <HiSearch className='mt-1 w-6 h-6 border-r-2' />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <HiMenu className='mt-1 w-6 h-6' />
                                </a>
                            </li>
                        
                        </ul>


                    </div>
                </div>


                {/*  */}
                </div>
            </div>
        </div>
        
    )
}

export default Bottom