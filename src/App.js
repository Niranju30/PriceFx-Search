import React from 'react';
import './App.css';
import PricefxDataFetcher from './PricefxDataFetcher';  // Import the new component

function App() {
  return (
    <div className="App">
      <main>
        <PricefxDataFetcher />  {/* Render the PricefxDataFetcher component */}
      </main>
    </div>
  );
}

export default App;
