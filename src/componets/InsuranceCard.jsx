import React from 'react'

const InsuranceCard = ({ img, heading, para }) => {
    return (
        <div className='w-92.5 py-13.75 px-8.75 hover:bg-white hover:shadow text-center rounded-sm duration-200'>
            <div className=' m-auto flex justify-center items-center  h-18.75'>
                <img src={img} alt="" />
            </div>
            <h2 className='font-sansssa font-bold text-[20px] mt-7.5 '>{heading}</h2>
            <p className='font-sansssa font-normal text-[16px] text-center'>{para}</p>
        </div>
    )
}

export default InsuranceCard
