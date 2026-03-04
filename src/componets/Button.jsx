import React, { Children } from 'react'

const Button = ({children ,className}) => {
  return (
    <>
      <button className='px-7.5 py-3 bg-primary cursor-pointer font-sansssa text-white text-[20px] rounded-[10px]'>
        {children}
      </button>
    </>
  )
}

export default Button
