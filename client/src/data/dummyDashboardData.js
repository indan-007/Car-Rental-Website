// src/data/dummyDashboardData.js
const dummyDashboardData = {
  totalCars: 5,
  totalBookings: 20,
  pendingBookings: 3,
  completedBookings: 17,
  recentBookings: [
    {
      car: { brand: "Audi", model: "A4" },
      createdAt: "2025-09-08T12:00:00Z",
      price: 250,
      status: "confirmed"
    }
  ],
  monthlyRevenue: 5000,
};
export default dummyDashboardData;
