import React, { Children } from 'react'

const Button = ({children ,className}) => {
  return (
    <>
      <button className={`${className} xl:px-7.5 xl:py-3 px-3 py-2 bg-primary cursor-pointer font-sansssa text-white xl:text-[20px] text-[17px] rounded-[10px]`}>
        {children}
      </button>
    </>
  )
}

export default Button
