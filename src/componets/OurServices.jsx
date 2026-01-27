import React from 'react'
import ComHeader from './ComHeader'
import ServiceCard from './ServiceCard'
import house from '../assets/house.png'
import hand from '../assets/hand.png'
import car from '../assets/car.png'
import Flex from './Flex'

const OurService = () => {
  return (
    <div className='mt-31.25'>
      <div className="container">
        <ComHeader 
         header="OUR SERVICES"
         heading="Insurance made simple for you"
         para="We work with several leading insurance companies to secure insurance coverages tailored to meet your needs."
        />

        <Flex >
          <ServiceCard 
          imgSrc={house}
          heading='Home insurance'
          para='Home insurance is a type of insurance policy that provides cover for your home.'
          />

          <ServiceCard 
          imgSrc={hand}
          heading=' Life Insurance'
          para="Helping you bridge gaps in your health care coverage during times of transition"
          />


          <ServiceCard 
          imgSrc={car}
          heading='Car Insurance'
          para="Car insurance is a type of insurance policy that provides cover for your car."
          />
        </Flex>



      </div>
    </div>
  )
}

export default OurService
