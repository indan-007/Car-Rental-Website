import React from "react";

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Hero Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Revolutionising Car Rentals in India
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          CarRental is India’s most reliable self-drive car rental platform. We
          blend technology, convenience, and affordability to put the power of
          mobility into your hands — from Mumbai to Manali.
        </p>
      </div>

      {/* Two-Column: Who We Are & Our Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Who We Are */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded by a team of travel-tech enthusiasts, CarRental is built
            with a mission to change how India moves. We serve both urban
            explorers and long-distance travelers with a curated fleet of cars
            designed for Indian roads — hatchbacks, sedans, SUVs, and even EVs.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We operate with partnerships in 40+ cities including Bangalore,
            Delhi, Pune, Hyderabad, Chennai, and more. Our goal? Hassle-free car
            rental that respects your time and money.
          </p>
        </div>

        {/* Our Vision */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            India is moving — and so are we. Our vision is to be the most loved
            mobility brand in India. We want every Indian to feel the freedom of
            the open road, whether it’s for a solo business trip or a weekend
            family escape.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With sustainable vehicle options, zero-paper processes, and
            app-first booking, we’re not just another rental company — we’re
            your travel partner.
          </p>
        </div>
      </div>

      {/* Why Indians Love Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Why India Trusts CarRental
        </h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
            🚗 <strong>Pan-India Fleet</strong>
            <br />
            Vehicles available in metro and tier-2 cities.
          </li>
          <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
            📱 <strong>App-First Booking</strong>
            <br />
            Real-time availability and instant confirmations.
          </li>
          <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
            🔒 <strong>Safe & Sanitized</strong>
            <br />
            Regularly cleaned vehicles with 24/7 roadside assistance.
          </li>
          <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
            🕒 <strong>Flexible Plans</strong>
            <br />
            Hourly, daily, weekly or long-term rentals.
          </li>
          <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
            🛣️ <strong>Unlimited Kilometres</strong>
            <br />
            Enjoy long drives without worrying about extra charges.
          </li>
          <li className="bg-gray-50 p-6 rounded-lg shadow-sm">
            ⚡ <strong>EV Ready</strong>
            <br />
            Access to electric cars in select cities.
          </li>
        </ul>
      </div>

      {/* Stats Section */}
      <div className="grid sm:grid-cols-3 gap-8 text-center mb-20">
        <div>
          <h3 className="text-4xl font-bold text-primary">25,000+</h3>
          <p className="text-gray-600">Bookings Completed</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-primary">95%</h3>
          <p className="text-gray-600">Repeat Customers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-primary">40+</h3>
          <p className="text-gray-600">Cities Served</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Experience Freedom Like Never Before
        </h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Whether you need a car for a road trip to the Himalayas or a quick
          drive to the airport, CarRental is your trusted ride partner. Book now
          and drive the change.
        </p>
        <a
          href="/cars"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition"
        >
          Explore Our Cars
        </a>
      </div>
    </section>
  );
};

export default About;
