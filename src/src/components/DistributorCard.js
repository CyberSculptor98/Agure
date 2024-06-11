import React from 'react';
import './DistributorCard.css';

const DistributorCard = ({ distributor }) => {
  return (
    <div className="distributor-card">
      <h2>{distributor.name}</h2>
      <p>Last Month Shipped: {distributor.lastMonthShipped}</p>
      <p>Forecasted Shipped: {distributor.forecastedShipped}</p>
      <p>YTD Average Shipped: {distributor.ytdAverageShipped}</p>
    </div>
  );
};

export default DistributorCard;
