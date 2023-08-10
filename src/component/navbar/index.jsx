import React from 'react'
import Top from './Top'
import Bottom from './Bottom'
import Slider from './slider'
import slids from '../../../src/slide.json'

const Navbar = () => {
  return (
    <div className='mx-auto '>
              <Bottom className="" />

        <Top/>
        
        <Slider className="" slids={slids} />
        {/* <div className='mt-8'> */}
        {/* <Bottom />/ */}
        {/* </div> */}
        
    </div>
  )
}

export default Navbar