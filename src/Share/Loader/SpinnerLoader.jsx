import React from 'react'
import "../Loader/Loader.css"
const SpinnerLoader = () => {
  return (
    <div className='bg-slate-800 flex justify-center items-center w-full h-screen'>
    <span className="loader"></span>
</div>
  )
}

export default SpinnerLoader