import React from 'react'
import logo from '../assets/logo/XMLID_1_.svg'
import path from '../assets/Vector.png'
import Button from './Button'
import Flex from './Flex'
import { FaBarsStaggered } from "react-icons/fa6";



const Navber = () => {
    return (
        <>
            <nav className='mt-12.5'>
                <div className="container  ">
                    <Flex className='items-center lg:justify-between'>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                <h3 className='w-52 h-[44] font-bold  text-3xl '>Pacific Corp.</h3>
                            </div>
                        </div>
                        <div className='lg:flex items-center lg:gap-25'>
                            <ul className=' lg:flex lg:justify-between  font-sanssa gap-10  text-paragraphColor text-[16px]'>
                                <li>Home</li>
                                <li>Pages</li>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                            <div>
                                <Button>Call Now</Button>
                            </div>
                        </div>
                        <div className='lg:hidden'>
                            <FaBarsStaggered />
                        </div>

                    </Flex>
                </div>
                <div className=' absolute top-0 left-0 '>
                    <img src={path} alt="" />
                </div>
                
            </nav>
        </>
    )
}

export default Navber
