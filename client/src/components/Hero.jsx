import React from 'react'
import { assets } from '../assets';


const Hero = () => {
  const [pickupLocation, setPickupLocation] = React.useState('');

  const cityList = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad'];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ pickupLocation });
    // navigate logic here if needed
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-14 bg-light text-center overflow-hidden">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold">Luxury Cars on Rent</h1>

      {/* Form */}
      <form 
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] gap-6"
      >
        
        {/* Pickup Location */}
        <div className="flex flex-col items-start gap-2 w-full md:w-auto">
          <label className="text-sm font-medium text-gray-600">Pickup Location</label>
          <select
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="border rounded px-3 py-2 w-full md:w-40"
          >
            <option value="">Select Location</option>
            {cityList.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="pickup-date" className="text-sm font-medium text-gray-600">Pick-up Date</label>
          <input
            type="date"
            id="pickup-date"
            min={new Date().toISOString().split('T')[0]}
            className="border rounded px-3 py-2 text-sm text-gray-500"
            required
          />
        </div>

        {/* Return Date */}
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="return-date" className="text-sm font-medium text-gray-600">Return Date</label>
          <input
            type="date"
            id="return-date"
            className="border rounded px-3 py-2 text-sm text-gray-500"
            required
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-1 px-9 py-3 bg-primary hover:bg-primary-dull text-white rounded-full shadow-md cursor-pointer"
        >
          <img src={assets.search_icon} alt="Search" className="brightness-300" />
          Search
        </button>
      </form>

      {/* Hero Car Image */}
      <img src={assets.main_car} alt="cars" className="max-h-74 object-contain" />
    </div>
  )
}

export default Hero
