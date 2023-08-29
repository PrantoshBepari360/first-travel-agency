import React from 'react'

import socialIcons from '../Share/Navbar/socialData'

const SocialMedia = () => {
    return (
        <div>
            <ul className="flex ">

                {socialIcons.map((item) => (

                    <li key={item.id} className="mr-2 ">
                        <a href={item.link} className=" w-[4rem] text-white hover:text-black"> {item.icon}{ }</a>
                    </li>


                )
                )}
            </ul>
        </div>
    )
}

export default SocialMedia