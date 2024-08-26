import React, { useState } from 'react';

const PricefxDataFetcher = () => {
  const [typeCode, setTypeCode] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = 'https://demo-eu.demo1.pricefx.com';  // Replace with actual base URL
  const partition = 'demofx_bprasath';  // Replace with actual partition name

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${baseUrl}/pricefx/${partition}/fetch/${typeCode}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa('demofx_bprasath/June-Mahesh:start123')  // Replace with actual credentials
          },
          
        }
      );

      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Pricefx Data Fetcher</h1>
      <div>
        <input
          type="text"
          value={typeCode}
          onChange={(e) => setTypeCode(e.target.value)}
          placeholder="Enter TypeCode"
        />
        <button onClick={handleFetch}>Fetch Data</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PricefxDataFetcher;
