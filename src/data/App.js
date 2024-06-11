import React from 'react';
import './App.css';
import mockDistributors from './data/mockData';
import DistributorCard from './components/DistributorCard';
import Summary from './components/Summary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Augur Dashboard</h1>
      </header>
      <Summary distributors={mockDistributors} />
      <div className="distributor-cards">
        {mockDistributors.map((distributor, index) => (
          <DistributorCard key={index} distributor={distributor} />
        ))}
      </div>
    </div>
  );
}

export default App;
