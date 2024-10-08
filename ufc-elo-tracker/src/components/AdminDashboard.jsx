// AdminDashboard.js
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation(); // Get the current location

  // Check if the current route is the admin route (not matches or fighters)
  const isAdminRoute = location.pathname === "/admin";

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </header>
      <nav className="bg-gray-700 p-4">
        <ul className="flex space-x-4">
          {/* Conditional rendering for cards or buttons */}
          {isAdminRoute ? (
            // Render cards when on the /admin route
            <>
              <li>
                <Link
                  to="matches"
                  className="block p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Match Management"
                    className="mb-4 rounded"
                  />
                  <h2 className="text-xl font-semibold">Match Management</h2>
                  <p className="mt-2">Manage and upload match details.</p>
                </Link>
              </li>
              <li>
                <Link
                  to="fighters"
                  className="block p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Fighter Management"
                    className="mb-4 rounded"
                  />
                  <h2 className="text-xl font-semibold">Fighter Management</h2>
                  <p className="mt-2">
                    Manage fighter profiles and statistics.
                  </p>
                </Link>
              </li>
            </>
          ) : (
            // Render buttons when on the child routes
            <>
              <li>
                <Link
                  to="/admin/matches"
                  className="block p-4 bg-gray-600 rounded-lg shadow-md hover:bg-gray-500 transition-colors"
                >
                  Match Management
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/fighters"
                  className="block p-4 bg-gray-600 rounded-lg shadow-md hover:bg-gray-500 transition-colors"
                >
                  Fighter Management
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <main className="flex-1 p-4">
        <Outlet /> {/* This will render the child routes */}
      </main>
    </div>
  );
};

export default AdminDashboard;
