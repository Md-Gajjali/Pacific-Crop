import React from 'react'
import Container from './Container'
import ComHeader from './ComHeader'
import family1 from '../assets/family1.png'
import family2 from '../assets/family2.png'
import family3 from '../assets/family3.png'
import Flex from './Flex'

const Protection = () => {
    return (
        <div>
            <Container>
                <ComHeader
                    header='our tips for you'
                    heading='Reinventing Your Protection'
                    para='We share common trends, strategies ideas, opinion, short & log
            stories from the team behind company'
                    className='mt-32.5'
                />
                <Flex className='justify-between mt-12'>
                    <img src={family1} alt="" />
                    <div className='text-center items-center  '>
                        <div>
                            <img src={family2} alt="" className='h-59.25' />
                        </div>
                        <h2 className='font-sansssa font-bold text-2xl w-81.5 mt-5 m-auto'>How to prevent and protect your family from Carbon monoxide</h2>
                        <p className='w-77 mt-2.5 m-auto'>We share common trends, strategies ideas, opinion, short & log
                            stories from the team behind company.</p>
                    </div>
                    <img src={family3} alt="" />
                </Flex>
            </Container>
        </div>
    )
}

export default Protection
