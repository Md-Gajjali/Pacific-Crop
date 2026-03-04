import React from 'react'
import Container from '../componets/Container'
import ComHeader from '../componets/ComHeader'
import Flex from './Flex'
import verified from '../assets/verified.svg'
import star from '../assets/star.png'
import man from '../assets/man.png'
import woman1 from '../assets/woman1.png'
import woman2 from '../assets/woman2.png'

const CustomerSays = () => {

    return (
        <div>
            <Container>
                <ComHeader 
                    header='testimonial' 
                    heading='What Our Customer Have To Says'
                    para='We share common trends, strategies ideas, Opinion, short & log
                    stories from the team behind company'
                    className='mt-32.5'

                />

                <Flex className='justify-between'>
                    <div className='w-92.25 py-13 px-13.75 bg-white shadow-2xl rounded-2xl mt-12'>
                        <Flex className='gap-2'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </Flex>
                        <p className='w-64.5 text-[16px] font-sansssa font-medium mt-5'>I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.</p>
                        <div className='mt-8 flex justify-center items-center gap-4 '>
                            <img src={woman2} alt="" className='w-15 h-15 mt-8'/>
                            <div className='mt-6'>
                                <h2 className='font-sansssa font-bold text-[20px]'>Viola Manisa</h2>
                                <Flex>
                                    <img src={verified} alt="" />
                                    <p>Verified customer</p>
                                </Flex>
                            </div>
                        </div>
                    </div>
                    <div className='w-92.25 py-13 px-13.75 bg-white shadow-2xl rounded-2xl mt-12'>
                        <Flex className='gap-2'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </Flex>
                        <p className='w-64.5 text-[16px] font-sansssa font-medium mt-5'>I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.</p>
                        <div className='mt-8 flex justify-center items-center gap-4 '>
                            <img src={man} alt="" className='w-15 h-15 mt-8'/>
                            <div className='mt-6'>
                                <h2 className='font-sansssa font-bold text-[20px]'>Viola Manisa</h2>
                                <Flex>
                                    <img src={verified} alt="" />
                                    <p>Verified customer</p>
                                </Flex>
                            </div>
                        </div>
                    </div>
                    <div className='w-92.25 py-13 px-13.75 bg-white shadow-2xl rounded-2xl mt-12'>
                        <Flex className='gap-2'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </Flex>
                        <p className='w-64.5 text-[16px] font-sansssa font-medium mt-5'>I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.</p>
                        <div className='mt-8 flex justify-center items-center gap-4 '>
                            <img src={woman1} alt="" className='w-15 h-15 mt-8'/>
                            <div className='mt-6'>
                                <h2 className='font-sansssa font-bold text-[20px]'>Viola Manisa</h2>
                                <Flex>
                                    <img src={verified} alt="" />
                                    <p>Verified customer</p>
                                </Flex>
                            </div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default CustomerSays
