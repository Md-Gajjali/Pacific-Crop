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
            <div className='lg:w-111.75 w-50 lg:py-12.5 py-4 lg:px-11.25 px-3 bg-white absolute top-10 lg:left-12.75 left-7 rounded-2xl' >
                <img src={icon} alt="" className='w-5' />
                <p className='font-sansssa font-semibold lg:text-[25px] text-[13px] mt-5'>This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and i wouldn’t hesitate to recommend them.</p>
                <h2 className='lg:mt-10 mt-3 text-[10px]'>Daniel Anderson</h2>
                <span className='flex mt-3'>
                    <img src={verifiedIcon} alt="" className='w-5 '/>
                    <p className='text-[10px] lg:text-'>Verified customer</p>
                </span>
            </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default VerifiedCustomer
