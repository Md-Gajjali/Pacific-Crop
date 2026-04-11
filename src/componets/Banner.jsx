import React from 'react'
import Button from '../componets/Button.jsx'
import family from '../assets/family.png'
import Flex from '../componets/Flex.jsx'

const Banner = () => {
  return (
    <>
    <div className='relative'>
        <div className="container ">
          <Flex className='mt-36'>
            <div>
              <h1
                className='lg:w-170 w-90 z-80 lg:h-67.5 font-sansssa font-bold lg:text-[70px] text-[30px] text-heading leading-o.2  '>
                  We Are Ready To Make Your New Life Happier
              </h1>
              <p
                className='lg:py-16 text-paragraphColor mt-10 lg:mt-0 mb-10 lg:w-156.75 w-100 h-18 font-sansssa font-normal text-[20px] leading-9  '>
                  We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
              </p>
              <Button className='mt-6 lg:mt-0'>Get a consultationn</Button>
            </div>
            <div className='xsm:hidden sm:hidden md:block'>
              <img src={family} alt="banner" className='absolute   -z-20 lg:z-0  -right-50 lg:right-0 ' />
            </div>
          </Flex>
        </div>
    </div>
    </>
  )
}

export default Banner
