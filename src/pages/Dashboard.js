import React from "react";
import { FaTachometerAlt, FaBoxOpen, FaUsers, FaShoppingCart, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { Bar, Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "chart.js/auto";
import { Link } from "react-router-dom";

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #111827;
  color: #fff;
  font-family: Arial, sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: #1f2937;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    flex-wrap: wrap;
  }
`;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  flex-grow: 1;
  @media (max-width: 768px) {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavItem = styled(motion.li)`
  padding: 12px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  transition: background 0.3s;
  &:hover {
    background-color: #374151;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px;
  }
`;

const Logout = styled(NavItem)`
  margin-top: auto;
  color: #dc3545;
  @media (max-width: 768px) {
    margin-top: 10px;
    order: 1;
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #222;
  border-radius: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoginButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const StatCard = styled(motion.div)`
  padding: 20px;
  border-radius: 10px;
  min-width: 150px;
  background-color: ${(props) => props.bgColor || "#007bff"};
  color: ${(props) => props.textColor || "#fff"};
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;

const ChartBox = styled.div`
  padding: 20px;
  background-color: #1f2937;
  border-radius: 10px;
  min-width: 300px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
  flex: 1;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Dashboard = () => {
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 180, 220, 260, 300],
        backgroundColor: "rgba(0, 123, 255, 0.6)",
      },
    ],
  };

  const ordersData = {
    labels: ["Completed", "Pending", "Cancelled"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
      },
    ],
  };

  return (
    <DashboardContainer className="animate__animated animate__fadeIn">
      <Sidebar>
        <Logo>ByteMart</Logo>
        <nav>
          <NavList>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <NavItem whileHover={{ scale: 1.1 }}>
                <FaTachometerAlt /> Dashboard
              </NavItem>
            </Link>
            <Link to="/product-uploads" style={{ textDecoration: "none", color: "inherit" }}>
              <NavItem whileHover={{ scale: 1.1 }}>
                <FaBoxOpen /> Product Uploads
              </NavItem>
            </Link>
            <Link to="/inventory-dashboard" style={{ textDecoration: "none", color: "inherit" }}>
              <NavItem whileHover={{ scale: 1.1 }}>
                <FaShoppingCart /> Inventory
              </NavItem>
            </Link>
            <Link to="/user-analytics" style={{ textDecoration: "none", color: "inherit" }}>
              <NavItem whileHover={{ scale: 1.1 }}>
                <FaUsers /> User Analytics
              </NavItem>
            </Link>
            <Logout whileHover={{ scale: 1.1 }}>
              <FaSignOutAlt /> Logout
            </Logout>
          </NavList>
        </nav>
      </Sidebar>

      <MainContent>
        <Header>
          <h1 className="text-primary">Dashboard Overview</h1>
          <div>
            <LoginButton>Login</LoginButton>
            <FaUserCircle size={30} className="ms-3" />
          </div>
        </Header>

        <StatsContainer>
          <StatCard whileHover={{ scale: 1.05 }} bgColor="#007bff">
            <h3>Total Sales</h3>
            <p>2,225</p>
          </StatCard>
          <StatCard whileHover={{ scale: 1.05 }} bgColor="#28a745">
            <h3>Active Users</h3>
            <p>1,543</p>
          </StatCard>
          <StatCard whileHover={{ scale: 1.05 }} bgColor="#ffc107" textColor="#111827">
            <h3>New Orders</h3>
            <p>43</p>
          </StatCard>
        </StatsContainer>

        <ChartsContainer>
          <ChartBox>
            <h5>Sales Overview</h5>
            <Bar data={salesData} />
          </ChartBox>
          <ChartBox>
            <h5>Order Status</h5>
            <Doughnut data={ordersData} />
          </ChartBox>
        </ChartsContainer>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;





