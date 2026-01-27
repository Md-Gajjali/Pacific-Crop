import React from 'react'

const ComHeader = ({header,heading,para}) => {
  return (
    <div className=' mx-auto text-center w-186px  '>
      <h5 className=' border-b border-dashed w-65 text-primary text-base mx-auto pb-5 '>{header}</h5>
      <h2 className='text-headingColor text-[40px] pb-7.5 pt-5 '>{heading}</h2>
      <p className='text-paragraphColor  w-150 mx-auto '>{para}</p>
    </div>
  )
}

export default ComHeader
