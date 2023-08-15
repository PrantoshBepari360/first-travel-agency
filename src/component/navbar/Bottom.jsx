import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Home from './dropdown/Home'
// import About from './dropdown/About'
// import Tours from './dropdown/Tours'
// import Shop from './dropdown/Shop'
// import Blogs from './dropdown/Blog'
// import Element from './dropdown/Elements'
import { HiMenu, HiOutlineClipboard, HiSearch } from "react-icons/hi";
import NavJson from '../../../public/Nav2.json'



// import Top from './Top'

const Bottom = () => {

  // const [isOpen, setisOpen] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState([])

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const onEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev]
      arr[subMenuId] = true
      return arr;

    })

  }

  const subMousLeaveHandle = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev]
      arr[subMenuId] = false
      return arr;

    })

  }




  return (

    <div className='w-full z-50 top-10 absolute'>
      <div className='flex justify-between bg-white mx-auto p-6 w-[78rem] ' >
        <h2 className="text-2xl"> helo i am bottom</h2>


        <div className=" flex  list-none ">
          <ul className='flex '>
            {NavJson.map((item, i) => {
              // { console.log(item.name) }
              if (!item.children) {
                return (
                  <li
                    key={item.id} className='mr-5 text-gray-600 font-bold hover:text-menuColor'>
                    <a href={item.href}>
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              }
              return (
                <li
                  onMouseEnter={() => onEnterHandler(item.id)}
                  onMouseLeave={() => subMousLeaveHandle(item.id)}
                  key={item.id}
                  className="relative cursor-pointer text-gray-600  mr-5 font-bold "
                >
                  <span
                    onclick={() => setisOpen((prev) => !prev)}
                  >
                    {item.name}
                  </span>
                  <div className="absolute bg-subMenybg  top-full w-36 mt-6 hover:text-gray-600"
                    variants={variants}
                    animate={showSubMenu[item.id] ? "open" : "closed"}>
                    {
                      showSubMenu[item.id] &&
                      item.children.map((Submenu) => {
                        return (
                          <li key={Submenu.id} className='m-3'>
                            {/* {console.log(Submenu)} */}
                            <a>
                              <span href='#' className=''>
                                {Submenu.name}
                              </span>
                            </a>
                            {/* {console.log(Submenu)} */}
                          </li>
                        )
                      })
                    }
                  </div>



                </li>
              )
            })}
          </ul>


          <div className="flex-3  ">
            <ul className="flex justify-center  space-x-5">
              <li>
                <a href="#" class="text-gray-400">
                  <HiOutlineClipboard className='absolute mt-1 w-7 h-6' /><span className='relative text-white bg-menuColor font-light ml-4 rounded'>0</span>

                </a>
              </li>
              <div className='border-r-2 h-5 mt-1'></div>
              <li>
                <a href="#" className="text-gray-400 hover:text-menuColor">
                  <HiSearch className='mt-1 w-6 h-6' />
                </a>
              </li>
              <div className='border-r-2 h-5 mt-1'></div>
              <li>
                <a href="#" className="text-gray-400 hover:text-menuColor">
                  <HiMenu className='mt-1 w-6 h-6' />
                </a>
              </li>

            </ul>


          </div>
        </div>


        {/*  */}
      </div>
    </div>


  )
}

export default Bottom





// <div className=' flex ' >
// <Link to='/' className='mr-5 pb-6 hover:text-white ' >
//     <Home
//     item={list.mainmanu}
//     />
// </Link>
// <Link to='/About' className='mr-5 hover:text-white'>
//     <About />
// </Link>
// <Link to='/Tours' className='mr-5 hover:text-white'>
//     <Tours />
// </Link>
// <Link to='/Shop' className='mr-5 hover:text-white'>
//     <Shop />
// </Link>
// <Link to='/Blogs' className='mr-5 hover:text-white'>
//     <Blogs />
// </Link>
// <Link to='/Element' className='mr-5 hover:text-white'>
//     <Element />
// </Link>
// </div>