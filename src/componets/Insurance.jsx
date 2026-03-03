import React from 'react'
import Container from './Container'
import ComHeader from './ComHeader'
import Flex from './Flex'
import InsuranceCard from './InsuranceCard'
import starss from '../assets/starss.png'

const Insurance = () => {
  return (
    <div>
     <Container>
        <ComHeader 
            className='mt-32.5' 
            header='your benefits' 
            heading='We’re Your Right Insurance Advocate' 
            para='We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.'
        />
        <Flex>
            <InsuranceCard   
                img={starss}
                heading='We’re unbiased'
                para='Our online tools help you decide what
product is best for you. We’re here to insurance plan you choose.'
            />
        </Flex>

     </Container>
    </div>
  )
}

export default Insurance
