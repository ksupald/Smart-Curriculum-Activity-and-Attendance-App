import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", attendance: 85 },
  { name: "Tue", attendance: 90 },
  { name: "Wed", attendance: 78 },
  { name: "Thu", attendance: 92 },
  { name: "Fri", attendance: 88 },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li><Button variant="ghost" className="w-full justify-start">Dashboard</Button></li>
          <li><Button variant="ghost" className="w-full justify-start">Attendance</Button></li>
          <li><Button variant="ghost" className="w-full justify-start">Timetable</Button></li>
          <li><Button variant="ghost" className="w-full justify-start">Tasks</Button></li>
          <li><Button variant="ghost" className="w-full justify-start">Reports</Button></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-6">
        <h1 className="text-3xl font-semibold">Dashboard Overview</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold">Total Students</h2>
              <p className="text-2xl">1,240</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold">Total Teachers</h2>
              <p className="text-2xl">85</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold">Today’s Attendance %</h2>
              <p className="text-2xl">88%</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Weekly Attendance Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attendance" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Latest Logs */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Attendance marked for Class 10-A</li>
              <li>✔ New timetable added for Class 12-B</li>
              <li>✔ Task "Mock Test" assigned to Students</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
