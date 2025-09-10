import React from 'react'
import dummyCarData from "../../data/dummyCarData";
import dummyDashboardData from "../../data/dummyDashboardData";
import dummyMyBookingsData from "../../data/dummyMyBookingsData";


const Title = ({ title, subTitle }) => {
  return (
    <>
      <h1 className='font-medium text-3xl'>{title}</h1>
      <h2 className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>{subTitle}</h2>
    </>
  )
}

export default Title