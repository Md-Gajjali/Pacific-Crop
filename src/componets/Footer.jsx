import React from 'react'
import Container from './Container'
import Flex from './Flex'
import pacific from '../assets/pacific.png'
import group from '../assets/group.png'

const Footer = () => {
  return (
    <div className='mt-32'>
      <Container>
        <Flex>
          <div className='w-65.75'>
            <Flex className='items-center gap-2 '>
              <img src={pacific} alt="" />
              <h2>Pacific Corp.</h2>
            </Flex>
            <p className='font-sansssa text-[16px] mt-4'>Build a modern and creative website with crealand</p>
            <img src={group} alt="" className='mt-8' />
          </div>
          <div>
            <h2>Product</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h2></h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h2></h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h2></h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          
        </Flex>
      </Container>
    </div>
  )
}

export default Footer
