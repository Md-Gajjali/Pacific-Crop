import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'

const EmailPart = () => {
  
  return (
    <div className='py-32.5 mt-32.5 bg-black'>
     <Container>
        <h2 className='text-center text-[40px] text-white font-bold w-223.25 m-auto'>Ready To Get Insured? Submit Your Request 
            And Hear Back As Soon As Tomorroe.</h2>
        <Flex className='justify-center items-center mt-10 gap-5'>
            <input type="text"  placeholder='Your Email' className='w-[320px] py-3 px-3 rounded-[10px] bg-white outline-none '/>
            <Button className='h-16.25 w-41.5 '>Get Started</Button>
        </Flex>
        <p className='text-white font-sansssa text-center w-138.75 m-auto mt-7'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
     </Container>
    </div>
  )
}

export default EmailPart
