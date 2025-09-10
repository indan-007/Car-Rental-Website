import React from 'react'
import Title from './Title'
import { dummyCarData, assets } from '../assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'> 
      
      {/* Section Title */}
      <div>
        <Title 
          title="Featured Vehicles" 
          subTitle="Explore our selection of premium vehicles available for your next adventure." 
        />
      </div>        

      {/* Cars Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16'>
        {dummyCarData.slice(0, 6).map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>

      {/* CTA Button */}
      <button 
        onClick={() => {
          navigate('/cars')
          window.scrollTo(0, 0)
        }}
        className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-100 transition-all duration-300 rounded-md mt-16 cursor-pointer text-gray-700'
      >
        Explore all cars 
        <img src={assets.arrow_icon} alt="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"/>
      </button>
    </div>
  )
}

export default FeaturedSection
