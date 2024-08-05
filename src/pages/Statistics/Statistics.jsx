import React, { useContext, useState } from "react";
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
import "./Statistics.css";

function Statistics() {
  const { cryptoData } = useContext(CryptoContext);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate data for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = cryptoData.slice(indexOfFirstItem, indexOfLastItem);

  // Prepare chart data
  const chartData = currentData.map((crypto) => ({
    name: crypto.name,
    price: crypto.current_price,
    market_cap_rank: crypto.market_cap_rank,
  }));

  // Load more data
  const loadMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
      <h2 className="title">Crypto Statistics</h2>

      <h3 className="title">Prices</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
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
      </div>

      <h3 className="title">Market Cap Rank</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              scale="band"
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="market_cap_rank" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {indexOfLastItem < cryptoData.length && (
        <button className="load-more" onClick={loadMoreData}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Statistics;
