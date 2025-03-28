import React from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Students",
        data: [30, 50, 70, 60, 40, 80, 20],
        borderColor: "#FFA500",
        backgroundColor: "rgba(255,165,0,0.2)",
        fill: true,
      },
      {
        label: "Teachers",
        data: [20, 40, 80, 50, 30, 70, 30],
        borderColor: "#007BFF",
        backgroundColor: "rgba(0,123,255,0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Welcome Admin!</h2>
        <div className="stats">
          <div className="stat-card orange">50055 Students</div>
          <div className="stat-card blue">50+ Awards</div>
          <div className="stat-card red">30+ Departments</div>
          <div className="stat-card purple">$505 Revenue</div>
        </div>
        <div className="charts">
          <div className="chart-container">
            <h3>Revenue</h3>
            <Line data={chartData} />
          </div>
          <div className="chart-container">
            <h3>Number of Students</h3>
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
