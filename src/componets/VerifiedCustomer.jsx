import React from 'react'
import Container from './Container'
import img from '../assets/verified.png'
import icon from '../assets/verified.png'

const VerifiedCustomer = () => {
  return (
    <div>
      <Container>
        <div>
            <img src={img} alt="" />
            <div className='w-111.75 py-12 px-11.5 bg-white'>
                <img src={icon} alt="" />
                <p className='font-sansssa font-semibold text-[25px]'>This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and i wouldn’t hesitate to recommend them.</p>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default VerifiedCustomer
