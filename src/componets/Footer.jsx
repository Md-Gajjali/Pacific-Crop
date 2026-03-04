import React from 'react'
import Container from './Container'
import Flex from './Flex'
import pacific from '../assets/pacific.png'
import group from '../assets/group.png'

const Footer = () => {
  return (
    <div className='mt-32'>
      <Container>
        <Flex className='justify-between '>
          <div className='w-65.75'>
            <Flex className='items-center gap-2 '>
              <img src={pacific} alt="" />
              <h2>Pacific Corp.</h2>
            </Flex>
            <p className='font-sansssa text-[16px] mt-4'>Build a modern and creative website with crealand</p>
            <img src={group} alt="" className='mt-8' />
          </div>
          <div>
            <h2 className='text-[18px] font-bold'>Product</h2>
            <ul className='mt-8 font-sansssa text-[16px] text-gray-500 leading-9'>
              <li>Landingpage</li>
              <li>Futures</li>
              <li>Documentation</li>
              <li>Referral program</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h2 className='text-[18px] font-bold'>Services</h2>
            <ul className='mt-8 font-sansssa text-[16px] text-gray-500 leading-9'>
              <li>Documentation</li>
              <li>Design</li>
              <li>Themes</li>
              <li>Illustrations </li>
              <li>UI Kit</li>
            </ul>
          </div>
          <div>
            <h2 className='text-[18px] font-bold'>Company</h2>
            <ul className='mt-8 font-sansssa text-[16px] text-gray-500 leading-9'>
              <li>About</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h2 className='text-[18px] font-bold'>More</h2>
            <ul className='mt-8 font-sansssa text-[16px] text-gray-500 leading-9'>
              <li>Documentation</li>
              <li>License</li>
              <li>Changelog</li>
            </ul>
          </div>

          
        </Flex>
      </Container>
    </div>
  )
}

export default Footer
