import React, { useState } from "react";
import { FaEdit, FaPlusCircle, FaTimesCircle, FaUpload } from "react-icons/fa";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const InventoryDashboard = () => {
  const dueDate = new Date().toLocaleDateString();
  const [inventory, setInventory] = useState([
    { id: 1, name: "Laptop", stock: 50 },
    { id: 2, name: "Smartphone", stock: 15 },
    { id: 3, name: "Headphones", stock: 5 },
    { id: 4, name: "Keyboard", stock: 30 },
  ]);

  const [newProduct, setNewProduct] = useState("");
  const [newStock, setNewStock] = useState("");

  const updateStock = (id, amount) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === id ? { ...item, stock: Math.max(item.stock + amount, 0) } : item
      )
    );
  };

  const addProduct = () => {
    if (newProduct && newStock) {
      setInventory([...inventory, { id: inventory.length + 1, name: newProduct, stock: parseInt(newStock) }]);
      setNewProduct("");
      setNewStock("");
    }
  };

  return (
    <div className="container py-5 text-white" style={{ backgroundColor: "#111827" }}>
      <motion.h1 className="text-center animate__animated animate__fadeInDown">Inventory Dashboard</motion.h1>

      {/* Stats Cards */}
      <div className="row my-4">
        <div className="col-md-3">
          <div className="card bg-dark text-white text-center p-3 animate__animated animate__zoomIn">
            <h5>No. of Sales</h5>
            <h3>2,225</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-dark text-white text-center p-3 animate__animated animate__zoomIn">
            <h5>Last Month Profit</h5>
            <h3 className="text-success">57.43%</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-dark text-white text-center p-3 animate__animated animate__zoomIn">
            <h5>Net Profit</h5>
            <h3 className="text-success">61.37%</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-dark text-white text-center p-3 animate__animated animate__zoomIn">
            <h5>Items in Stock</h5>
            <h3>{inventory.reduce((sum, item) => sum + item.stock, 0)}</h3>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="card bg-dark p-4 animate__animated animate__fadeInUp">
        <h5>Inventory Status</h5>
        <table className="table text-white">
          <thead>
            <tr>
              <th>Product</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className={item.stock > 20 ? "text-success" : item.stock > 10 ? "text-warning" : "text-danger"}>
                  {item.stock}
                </td>
                <td>
                  <button className="btn btn-success me-2" onClick={() => updateStock(item.id, 5)}>
                    <FaPlusCircle /> Restock
                  </button>
                  <button className="btn btn-warning me-2" onClick={() => updateStock(item.id, -5)}>
                    <FaEdit /> Reduce
                  </button>
                  <button className="btn btn-danger" onClick={() => updateStock(item.id, -item.stock)}>
                    <FaTimesCircle /> Out of Stock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Upload */}
      <div className="card bg-dark p-4 mt-4 animate__animated animate__fadeInUp">
        <h5>Product Upload System</h5>
        <div className="input-group my-3">
          <input type="text" className="form-control" placeholder="Product Name" value={newProduct} onChange={(e) => setNewProduct(e.target.value)} />
          <input type="number" className="form-control" placeholder="Stock" value={newStock} onChange={(e) => setNewStock(e.target.value)} />
          <button className="btn btn-primary" onClick={addProduct}>
            <FaUpload /> Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;



