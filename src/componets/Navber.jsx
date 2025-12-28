import React from 'react'
import logo from '../assets/logo/XMLID_1_.svg'
import Button from './Button'
import Flex from './Flex'


const Navber = () => {
    return (
        <>
            <nav className='mt-12.5'>
                <div className="container ">
                    <Flex> 
                        <div className='flex gap-4 items-center'>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                <h3 className='w-52 h-[44] font-bold  text-3xl '>Pacific Corp.</h3>
                            </div>
                        </div> 
                <div>
                    <ul className=' flex justify-between  font-sanssa gap-10  text-[16px]'>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <Button>Call Now</Button>
                </div>
                    </Flex>
                </div>
            </nav>
        </>
    )
}

export default Navber
