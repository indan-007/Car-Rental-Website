import React, { useState, useEffect } from 'react'
import Title from '../../components/owner/Title'
import { assets } from "../../assets/index.js";
import dummyCarData from "../../data/dummyCarData";
import dummyDashboardData from "../../data/dummyDashboardData";
import dummyMyBookingsData from "../../data/dummyMyBookingsData";

const Dashboard = () => {

  const currency = import.meta.env.VITE__CURRENCY

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyBookings: 0,
    monthlyRevenue: 0,
  })

  useEffect(() => {
    setData(dummyDashboardData)
  }, [])

  const dashboardCards = [
    {title: "Total Cars", value: data.totalCars, icon: assets.carIconColored},
    {title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored},
    {title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored},
    {title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored},
  ]

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
        {dashboardCards.map((card, index) => (
          <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor'>
            <div>
              <h1 className='text-xs text-gray-500'>{card.title}</h1>
              <p className='text-lg font-semibold'>{card.value}</p>
            </div>
            <div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary/10'>
              <img src={card.icon} alt="" className='w-4 h-4' />
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>
        {/* recent booking */}
        <div className='flex-1'>
          <h2 className='text-lg font-medium mb-4'>Recent Bookings</h2>
          {data.recentBookings.map((booking, index) => (
            <div key={index} className='mt-4 flex items-center justify-between'>
              <div className='hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                <img src={assets.listIconColored} alt="" className='w-5 h-5' />
              </div>
              <div>
                <p>{booking.car.brand} {booking.car.model}</p>
                <p className='text-sm text-gray-500'>{booking.createdAt.split("T")[0]}</p>
              </div>
              <div className='flex items-center gap-2 font-medium'>
                <p className='text-sm text-gray-500'>{currency} {booking.price}</p>
                <p className='px-3 py-0.5 border border-borderColor rounded-full text-sm'>{booking.status}</p>
              </div>
            </div>
          ))}
        </div>
        {/* monthly revenue */}
        <div className='p-4 md:p-6 mb-6 border border-borderColor rounded-md w-full md:max-w-xs'>
          <h1 className='text-lg font-medium'>Monthly Revenue</h1>
          <p className='text-gray-500'>Revenue for current month</p>
          <p className='text-3xl mt-6 font-semibold text-primary'>{currency}{data.monthlyRevenue}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard