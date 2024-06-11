import React from 'react';
import './Summary.css';

const Summary = ({ distributors }) => {
  const totalShipped = distributors.reduce((sum, distributor) => sum + distributor.lastMonthShipped, 0);
  const totalForecasted = distributors.reduce((sum, distributor) => sum + distributor.forecastedShipped, 0);
  const averageYTD = (distributors.reduce((sum, distributor) => sum + distributor.ytdAverageShipped, 0) / distributors.length).toFixed(2);

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Shipped Last Month: {totalShipped}</p>
      <p>Total Forecasted to Ship: {totalForecasted}</p>
      <p>Average YTD Shipped: {averageYTD}</p>
    </div>
  );
};

export default Summary;
