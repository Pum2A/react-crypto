import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { CryptoContext } from "../../components/CryptoContext/CryptoContext";

function Statistics() {
  const { cryptoData } = useContext(CryptoContext);

  // Prepare chart data
  const chartData = cryptoData.map((crypto) => ({
    name: crypto.name,
    price: crypto.current_price,
    market_cap_rank: crypto.market_cap_rank,
  }));

  // Style objects for container and titles
  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Crypto Statistics</h2>

      <h3 style={titleStyle}>Prices</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis scale="log" domain={["auto", "auto"]} />
          <Tooltip />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h3 style={titleStyle}>Market Cap Rank</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="market_cap_rank" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Statistics;
