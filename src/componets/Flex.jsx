import React, { Children } from 'react'

const Flex = ({children,className}) => {
  return (
    <>
      <div className={`${className} flex `}>
        {children}
      </div>
    </>
  )
}

export default Flex


//template literal
// className={`flex justify-between items-center ${className}`}