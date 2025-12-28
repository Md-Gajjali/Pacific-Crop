import React, { Children } from 'react'

const Button = ({children}) => {
  return (
    <>
      <button className='px-7.5 py-4 bg-primary font-sansssa text-white text-[20px] rounded-[10px]'>
        {children}
      </button>
    </>
  )
}

export default Button
