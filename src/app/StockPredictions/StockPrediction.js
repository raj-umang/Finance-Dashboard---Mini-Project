// app/components/StockPrediction.js

import { useEffect, useState } from "react";

const StockPrediction = ({ stockSymbol }) => {
  const [predictions, setPredictions] = useState([]);
  const [comparisonTable, setComparisonTable] = useState([]);
  const [plotUrl, setPlotUrl] = useState("");

  useEffect(() => {
    const fetchPredictions = async () => {
      const response = await fetch(`/api/predict?stockSymbol=${stockSymbol}`);
      const data = await response.json();
      console.log(data); // Log the response to check if plot_url exists
      setPredictions(data.predicted_prices || []);
      setComparisonTable(data.comparison_table || []);
      setPlotUrl(data.plot_url || "");
    };

    fetchPredictions();
  }, [stockSymbol]);

  // Limit to 10 predictions and comparison rows
  const limitedPredictions = predictions.slice(0, 10);
  const limitedComparisonTable = comparisonTable.slice(0, 10);

  return (
    <div>
      <h2>Predicted Prices for {stockSymbol}</h2>
      <ul>
        {limitedPredictions.map((price, index) => (
          <li key={index}>{price.toFixed(2)}</li>
        ))}
      </ul>
      {plotUrl && <img src={plotUrl} alt="Prediction Plot" />}
    </div>
  );
};

export default StockPrediction;
