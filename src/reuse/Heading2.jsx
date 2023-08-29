import React from 'react'

const H2P2Ruse = ({heading2, para2, para3,para5, para6 }) => {

  return (
    <>
      

      <h2 className="text-4xl font-dancingFont font-semibold text-center text-gray-500 ">
        {heading2}</h2>
 
   
 



      {/* text-4xl font-caveatFont font-thin fon text-center text-orange-500 mb-2 */}
      {/* <p className="text-gray-600  leading-6 text-sm">{para1}</p> */}
      <p className="text-base leading-7 mb-2">{para2}</p>


      <p className="">{para3}</p>



    
{/*     
      <p className="text-base text-justify leading-7 mb-2">{para5}</p>

      <p className="text-base text-justify leading-7 mb-2">{para6}</p> 
  */}


    </>
  )
}

export default H2P2Ruse