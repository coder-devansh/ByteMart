import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Bar, Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "chart.js/auto";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #111827;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #222;
  border-radius: 10px;
  margin-bottom: 20px;
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

const Heading = styled.h3`
  color: #fff;
  font-size: 24px;
  margin-top: 20px;
  text-align: left;
`;

const Paragraph = styled.p`
  color: #fff;
  font-size: 16px;
  margin-top: 10px;
  text-align: left;
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
      <Header>
        <h1 className="text-primary">Dashboard Overview</h1>
        <div>
          <LoginButton>Login</LoginButton>
          <FaUserCircle size={30} className="ms-3" />
        </div>
      </Header>

      <Heading>Introduction</Heading>
      <Paragraph>
        Welcome to the ByteMart Dashboard. This platform provides an overview of key metrics and analytics to help you manage your business effectively. Monitor sales, user activity, and order statuses all in one place.
      </Paragraph>

      <Heading>Key Metrics</Heading>
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

      <Heading>Analytics</Heading>
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

      <Heading>Conclusion</Heading>
      <Paragraph>
        The ByteMart Dashboard is designed to give you a comprehensive view of your business's performance. Use the insights provided here to make informed decisions and drive growth.
      </Paragraph>
    </DashboardContainer>
  );
};

export default Dashboard;
