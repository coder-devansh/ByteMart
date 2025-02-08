import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductUploads from "./pages/product_uploads";
import InventoryDashboard from "./pages/InventoryDashboard";
import UserAnalytics from "./pages/UserAnalystics";
import OrderTracking from "./pages/order_tracking";
import Header from "./pages/Header"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product-uploads" element={<ProductUploads />} />
          <Route path="/inventory-dashboard" element={<InventoryDashboard />} />
          <Route path="/user-analytics" element={<UserAnalytics />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
    </Router>
  );
}

export default App;


