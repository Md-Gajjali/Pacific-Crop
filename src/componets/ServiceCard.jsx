import React from 'react'

const ServiceCard = ({imgSrc,heading,para}) => {
  return (
    <div className='w-92.5 shadow py-10 px-11.25 rounded-2xl hover:-translate-y-1/4 mt-38.75 mb-30'>
        <div className='w-67.5   mx-auto text-center'>
            <img src={imgSrc} alt="" className='mx-auto' />
            <h2 className='w-51.75 text-[25px] mx-auto py-5'>{heading}</h2>
            <p className='w-70 text[16px]  text-base/7  pb-2 '>{para}</p>
            <a href="">Learn more</a>
        </div>
    </div>
  )
}

export default ServiceCard
