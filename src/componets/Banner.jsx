import React from 'react'
import Button from '../componets/Button.jsx'
import family from '../assets/family.png'
import Flex from '../componets/Flex.jsx'

const Banner = () => {
  return (
    <>
    <div className='relative'>
        <div className="container ">
          <Flex className=''>
            <div>
              <h1
                className='w-170 h-67.5 font-sansssa font-bold text-[70px] text-heading leading-o.2 mt-36 '>
                  We Are Ready To Make Your New Life Happier
              </h1>
              <p
                className='py-16 text-paragraphColor mb-10 w-156.75 h-18 font-sansssa font-normal text-[20px] leading-9  '>
                  We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
              </p>
              <Button>Get a consultationn</Button>
            </div>
            <div>
              <img src={family} alt="banner" className='absolute top-11 right-0 ' />
            </div>
          </Flex>
        </div>
    </div>
    </>
  )
}

export default Banner
