import React, { useState } from 'react'
import logo from '../assets/logo/XMLID_1_.svg'
import path from '../assets/Vector.png'
import Button from './Button'
import Flex from './Flex'
import { FaBarsStaggered } from "react-icons/fa6";



const Navber = () => {

    const [show,setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }


    return (
        <>
            
            <nav className='mt-12.5 relative z-50'>
                <div className="container">
                    <Flex className='items-center justify-between'>

                        {/* Logo */}
                        <div className='flex gap-4 items-center'>
                            <img src={logo} alt="" />
                            <h3 className='w-52 font-bold text-3xl'>Pacific Corp.</h3>
                        </div>

                        {/* Desktop Menu */}
                        <div className='hidden lg:flex items-center lg:gap-25'>
                            <ul className='flex gap-10 text-paragraphColor text-[16px]'>
                                <li>Home</li>
                                <li>Pages</li>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                            <Button>Call Now</Button>
                        </div>

                        {/* Mobile Icon */}
                        <div className='lg:hidden text-2xl cursor-pointer'>
                            <FaBarsStaggered onClick={handleClick} />
                        </div>

                    </Flex>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
                        show ? "max-h-96 py-5" : "max-h-0 overflow-hidden"
                    }`}
                >
                    <ul className='flex flex-col items-center gap-5 text-paragraphColor text-[16px]'>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <div className='flex justify-center mt-4'>
                        <Button>Call Now</Button>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navber
