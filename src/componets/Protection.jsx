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
                    <div>
                        <img src={family2} alt="" className='h-59.25' />
                        <p></p>
                    </div>
                    <img src={family3} alt="" />
                </Flex>
            </Container>
        </div>
    )
}

export default Protection
