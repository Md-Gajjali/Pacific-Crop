import React from 'react'
import Container from './Container'
import ComHeader from './ComHeader'
import Flex from './Flex'
import InsuranceCard from './InsuranceCard'
import starss from '../assets/starss.png'
import save from '../assets/save.png'
import protect from '../assets/protect.png'
import woman from '../assets/woman.png'
import simple from '../assets/simple.png'

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
        <Flex className='flex-wrap justify-center mt-20 '>
            <InsuranceCard   
                img={starss}
                heading='We’re unbiased'
                para='Our online tools help you decide what
                product is best for you. We’re here to insurance plan you choose.'
            />
            <InsuranceCard   
                img={save}
                heading='We have the best prices'
                para='Our insurance plans offers are priced the same everywhere else. We just make them easier for you to find.'
            />
            <InsuranceCard   
                img={protect}
                heading='We’re your insurance advocate'
                para='We will deal with the insurance
                companies for you, even after you’ve bought your plan.'
            />
             <InsuranceCard   
                img={woman}
                heading='We’re availabe 24/7'
                para='We have your back 24/7 between our
                online chat function, email and
                telephone support..'
            />
             <InsuranceCard   
                img={starss}
                heading='We make insurance simple'
                para='We’re commited to making applying for
                insurance as simple as can 
                be for our customers.'
            />
        </Flex>

     </Container>
    </div>
  )
}

export default Insurance
