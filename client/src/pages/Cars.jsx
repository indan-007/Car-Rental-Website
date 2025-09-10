import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets";
import CarCard from "../components/CarCard";



// Dummy Car Data (aligned with CarCard.jsx)
const dummyCarData = [
  {
    _id: 1,
    brand: "Tesla",
    model: "Model 3",
    pricePerDay: 120,
    image: "/cars/tesla-model3.jpg",
    category: "Sedan",
    year: 2023,
    seating_capacity: 5,
    fuel_type: "Electric",
    transmission: "Automatic",
    location: "San Francisco, CA",
    isAvailable: true,
  },
  {
    _id: 2,
    brand: "BMW",
    model: "X5",
    pricePerDay: 150,
    image: "/cars/bmw-x5.jpg",
    category: "SUV",
    year: 2022,
    seating_capacity: 5,
    fuel_type: "Petrol",
    transmission: "Automatic",
    location: "Los Angeles, CA",
    isAvailable: true,
  },
  {
    _id: 3,
    brand: "Toyota",
    model: "Corolla",
    pricePerDay: 70,
    image: "/cars/toyota-corolla.jpg",
    category: "Sedan",
    year: 2021,
    seating_capacity: 5,
    fuel_type: "Hybrid",
    transmission: "Manual",
    location: "New York, NY",
    isAvailable: false,
  },
];

const Cars = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title="Available Cars"
          subTitle="Browse our selection of premium vehicles available for your next adventure"
        />

        <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img src={assets.search_icon} alt="search" className="w-4.5 h-4 mr-2" />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by make, model, or features"
            className="w-full h-full outline-none text-gray-500"
          />
          <img src={assets.filter_icon} alt="filter" className="w-4.5 h-4.5 ml-2" />
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
          Showing {dummyCarData.length} Cars
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {dummyCarData.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
