import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'

const EmailPart = () => {
  
  return (
    <div className='py-32.5 mt-32.5 bg-black'>
     <Container>
        <h2 className='text-center lg:text-[40px] text-[20px] text-white font-bold lg:w-223.25 m-auto'>Ready To Get Insured? Submit Your Request 
            And Hear Back As Soon As Tomorroe.</h2>
        <Flex className='justify-center items-center  mt-10 gap-5'>
            <input type="text"  placeholder='Your Email' className='lg:w-[320px] w-180 py-3 px-3 rounded-[10px] bg-white outline-none '/>
            <Button className='h-16.25 lg:w-41.5 w-20 '>Get Started</Button>
        </Flex>
        <p className='text-white! font-sansssa text-center lg:w-138.75 m-auto mt-7'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
     </Container>
    </div>
  )
}

export default EmailPart
