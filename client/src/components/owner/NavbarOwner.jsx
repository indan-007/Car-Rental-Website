import React from 'react';
import { dummyUserData, assets } from '../../assets';
import { Link } from 'react-router-dom';
import dummyCarData from "../../data/dummyCarData";
import dummyDashboardData from "../../data/dummyDashboardData";
import dummyMyBookingsData from "../../data/dummyMyBookingsData";


const NavbarOwner = () => {
  const user = dummyUserData;

  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all">
      
      {/* About Link */}
      <Link to="/about" className="hover:text-primary transition-colors">
        About
      </Link>

      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="CarRental Logo" className="h-7" />
      </Link>

      {/* User Greeting */}
      <p>Welcome, {user.name || "Owner"}</p>
    </div>
  );
};

export default NavbarOwner
