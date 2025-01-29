import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const patientData = [
  { date: "Jan", XRay: 2, MRI: 1, CTScan: 1 },
  { date: "Feb", XRay: 3, MRI: 2, CTScan: 1 },
  { date: "Mar", XRay: 4, MRI: 2, CTScan: 2 },
  { date: "Apr", XRay: 3, MRI: 3, CTScan: 1 },
  { date: "May", XRay: 5, MRI: 2, CTScan: 3 },
];

const PatientDashboard = () => {
  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">Patient Dashboard</h2>
      
      {/* Diagnosis Trends */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold text-orange-400 mb-4">Diagnosis Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={patientData}>
            <XAxis dataKey="date" stroke="#FFA500" />
            <YAxis stroke="#FFA500" />
            <Tooltip />
            <CartesianGrid stroke="#444" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="XRay" stroke="#FF4500" strokeWidth={3} />
            <Line type="monotone" dataKey="MRI" stroke="#FFA500" strokeWidth={3} />
            <Line type="monotone" dataKey="CTScan" stroke="#FFD700" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Report Summary */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold text-orange-400 mb-4">Health Report Summary</h3>
        <p className="text-gray-300">Last Checkup: <span className="text-white font-bold">May 2025</span></p>
        <p className="text-gray-300">Diagnosis: <span className="text-white font-bold">Normal</span></p>
        <p className="text-gray-300">Prescribed Medications: <span className="text-white font-bold">None</span></p>
      </div>
      
      {/* Appointment History */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-orange-400 mb-4">Upcoming Appointments</h3>
        <ul className="text-gray-300">
          <li className="mb-2">🗓 MRI Scan - <span className="text-white font-bold">June 10, 2025</span></li>
          <li className="mb-2">🗓 Doctor Consultation - <span className="text-white font-bold">June 15, 2025</span></li>
        </ul>
      </div>
    </div>
  );
};

export default PatientDashboard;
