import React from 'react'
import Container from './Container'
import img from '../assets/verified.png'
import icon from '../assets/left.png'
import verifiedIcon from '../assets/verifiedIcon.svg'

const VerifiedCustomer = () => {
  return (
    <div>
      <Container>
        <div>
            <div className='relative'>
                <img src={img} alt=""  />

            <div className='w-111.75 py-12 px-11.5 bg-white absolute top-10 left-12.75 rounded-2xl' >
                <img src={icon} alt="" />
                <p className='font-sansssa font-semibold text-[25px] mt-5'>This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and i wouldn’t hesitate to recommend them.</p>
                <h2 className='mt-10'>Daniel Anderson</h2>
                <span className='flex mt-3'>
                    <img src={verifiedIcon} alt="" />
                    <p>Verified customer</p>
                </span>
            </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default VerifiedCustomer
