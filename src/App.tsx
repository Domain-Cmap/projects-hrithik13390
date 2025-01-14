import React, { useState } from 'react';
import { Drone, AlertTriangle, MapPin, Battery, Wind, ThermometerSun } from 'lucide-react';

type DroneStatus = {
  id: string;
  status: 'active' | 'maintenance' | 'emergency';
  location: string;
  battery: number;
  altitude: number;
  temperature: number;
  windSpeed: number;
};

function App() {
  const [drones] = useState<DroneStatus[]>([
    {
      id: "DR-001",
      status: "active",
      location: "28.6139° N, 77.2090° E",
      battery: 85,
      altitude: 120,
      temperature: 28,
      windSpeed: 15
    },
    {
      id: "DR-002",
      status: "emergency",
      location: "28.6129° N, 77.2270° E",
      battery: 20,
      altitude: 90,
      temperature: 30,
      windSpeed: 25
    },
    {
      id: "DR-003",
      status: "maintenance",
      location: "28.6219° N, 77.2190° E",
      battery: 45,
      altitude: 0,
      temperature: 27,
      windSpeed: 12
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'emergency': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Drone className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Drone Disaster Management</h1>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-300" />
              <span className="text-sm">Active Alerts: 2</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500">Active Drones</h3>
              <Drone className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold mt-2">4/6</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500">Coverage Area</h3>
              <MapPin className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold mt-2">12.5 km²</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500">Battery Average</h3>
              <Battery className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold mt-2">75%</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500">Weather Status</h3>
              <ThermometerSun className="h-5 w-5 text-orange-500" />
            </div>
            <p className="text-2xl font-bold mt-2">Optimal</p>
          </div>
        </div>

        {/* Drone List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Drone Fleet Status</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drone ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Battery</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conditions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {drones.map((drone) => (
                  <tr key={drone.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Drone className="h-5 w-5 text-gray-400 mr-2" />
                        {drone.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(drone.status)}`}>
                        {drone.status.charAt(0).toUpperCase() + drone.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        {drone.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Battery className="h-4 w-4 text-gray-400 mr-2" />
                        {drone.battery}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <ThermometerSun className="h-4 w-4 text-gray-400 mr-1" />
                          {drone.temperature}°C
                        </div>
                        <div className="flex items-center">
                          <Wind className="h-4 w-4 text-gray-400 mr-1" />
                          {drone.windSpeed} km/h
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;