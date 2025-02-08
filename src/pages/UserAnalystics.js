import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaChartLine, FaUserPlus, FaUserCheck } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function UserAnalytics() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Johnson', location: 'New York', registered: 'Jan 15, 2025', status: 'Active' },
    { id: 2, name: 'Bob Smith', location: 'Los Angeles', registered: 'Feb 2, 2025', status: 'Inactive' },
    { id: 3, name: 'Charlie Brown', location: 'Chicago', registered: 'Feb 5, 2025', status: 'Active' },
    { id: 4, name: 'David Wilson', location: 'Houston', registered: 'Mar 1, 2025', status: 'Active' },
  ]);

  const chartData = {
    labels: users.map(user => user.location),
    datasets: [
      {
        label: 'Users by Location',
        data: users.map(() => Math.floor(Math.random() * 20) + 5),
        backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
        borderColor: ['#0056b3', '#1c7430', '#d39e00', '#bd2130'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      {/* HEADER SECTION */}
      <div className="card shadow-lg border-0 rounded-lg p-4 bg-dark text-light">
        <h2 className="mb-4 text-center text-primary animate__animated animate__fadeInDown">
          <FaChartLine className="me-2"/> ByteMart User Analytics Dashboard
        </h2>
        <p className="text-center text-muted">
          Gain valuable insights into your customer base. Track user activity, demographics, and engagement to optimize ByteMart's experience.
        </p>

        {/* STATISTICS */}
        <div className="row text-center mb-4">
          <div className="col-md-4">
            <div className="p-3 bg-primary rounded text-light animate__animated animate__zoomIn">
              <FaUsers size={30} className="mb-2"/>
              <h5>Total Users</h5>
              <p className="fw-bold">4,500+</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-success rounded text-light animate__animated animate__zoomIn animate__delay-1s">
              <FaUserCheck size={30} className="mb-2"/>
              <h5>Active Users</h5>
              <p className="fw-bold">3,200+</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-warning rounded text-light animate__animated animate__zoomIn animate__delay-2s">
              <FaUserPlus size={30} className="mb-2"/>
              <h5>New Signups (Last Month)</h5>
              <p className="fw-bold">850</p>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="row">
          {/* CHART */}
          <div className="col-md-6">
            <div className="chart-container bg-light p-3 rounded" style={{ height: '300px' }}>
              <h5 className="text-dark text-center"><FaChartLine className="me-2"/> User Activity Chart</h5>
              <Bar data={chartData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          {/* USER TABLE */}
          <div className="col-md-6">
            <div className="table-responsive">
              <table className="table table-dark table-hover text-center">
                <thead>
                  <tr>
                    <th><FaUsers className="me-1"/> Name</th>
                    <th><FaMapMarkerAlt className="me-1"/> Location</th>
                    <th><FaCalendarAlt className="me-1"/> Registered</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id} className="animate__animated animate__fadeInUp">
                      <td>{user.name}</td>
                      <td>{user.location}</td>
                      <td>{user.registered}</td>
                      <td>
                        <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="text-center text-muted mt-3">* Data updates in real-time based on user activity.</p>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-light mt-4 py-3 bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About ByteMart</h5>
              <p>Your go-to e-commerce platform with the best deals on electronics.</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">Home</a></li>
                <li><a href="#" className="text-light">Shop</a></li>
                <li><a href="#" className="text-light">Analytics</a></li>
                <li><a href="#" className="text-light">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Support</h5>
              <p>Email: support@bytemart.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>
        </div>
        <div className="mt-3">
          &copy; 2025 ByteMart - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default UserAnalytics;

