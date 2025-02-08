import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { FaShippingFast, FaBoxOpen} from 'react-icons/fa';

function OrderTracking() {
  const [orders, setOrders] = useState([
    { id: 101, item: 'Laptop', status: 'Processing', estimatedDelivery: 'Feb 10, 2025' },
    { id: 102, item: 'Smartphone', status: 'Shipped', estimatedDelivery: 'Feb 8, 2025' },
    { id: 103, item: 'Headphones', status: 'Delivered', estimatedDelivery: 'Feb 5, 2025' },
    { id: 104, item: 'Smartwatch', status: 'Delayed', estimatedDelivery: 'Feb 12, 2025' }
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Processing': return 'badge bg-warning animate__animated animate__pulse';
      case 'Shipped': return 'badge bg-primary animate__animated animate__fadeIn';
      case 'Delivered': return 'badge bg-success animate__animated animate__bounce';
      case 'Delayed': return 'badge bg-danger animate__animated animate__shakeX';
      default: return 'badge bg-secondary';
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      <div className="card shadow-lg border-0 rounded-lg p-4 bg-dark text-light">
        <h2 className="mb-4 text-center text-primary animate__animated animate__zoomIn">
          <FaShippingFast className="me-2" /> ByteMart Order Tracking
        </h2>
        <p className="text-center text-muted">
          Track your active and past orders with real-time updates. Admins can manage order statuses dynamically.
        </p>

        <div className="table-responsive">
          <table className="table table-dark table-hover text-center">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Item</th>
                <th>Status</th>
                <th>Estimated Delivery</th>
                <th>Update Status (Admin)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="animate__animated animate__fadeInUp">
                  <td>{order.id}</td>
                  <td>{order.item}</td>
                  <td>
                    <span className={getStatusBadge(order.status)}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.estimatedDelivery}</td>
                  <td>
                    <select
                      className="form-select"
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Delayed">Delayed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-muted mt-3">
          * Orders update automatically with animations for better visibility.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-light text-center py-3 mt-5 animate__animated animate__fadeInUp">
        <p className="mb-0">
          <FaBoxOpen className="me-2" /> ByteMart - Your Trusted Online Store
        </p>
        <p className="text-muted">© 2025 ByteMart Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default OrderTracking;



