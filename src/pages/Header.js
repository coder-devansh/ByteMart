import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://bytemart.ae/cdn/shop/files/Untitled_design__4_-removebg-preview.png?height=628&pad_color=fff&v=1701028706&width=1200"
            alt="ByteMart Logo"
            width="50"
            height="50"
            className="me-2"
          />
          <span className="fs-4 fw-bold text-primary">ByteMart</span>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/product-uploads">Product Uploads</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/inventory-dashboard">Inventory</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/user-analytics">User Analytics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/order-tracking">Order Tracking</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
