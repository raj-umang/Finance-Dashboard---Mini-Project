// app/components/StockPrediction.js

import { useEffect, useState } from "react";

const StockPrediction = ({ stockSymbol }) => {
  const [predictions, setPredictions] = useState([]);
  const [plotUrl, setPlotUrl] = useState("");

  useEffect(() => {
    const fetchPredictions = async () => {
      const response = await fetch(`/api/predict?stockSymbol=${stockSymbol}`);
      const data = await response.json();

      setPredictions(data.predicted_prices || []);
      setPlotUrl(data.plot_url || "");
    };

    fetchPredictions();
  }, [stockSymbol]);

  const limitedPredictions = predictions.slice(0, 10);

  return (
    <div className="max-w-lg mx-auto my-5 p-5 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
      <h2 className="text-2xl mb-4 text-gray-800">
        Predicted Prices for {stockSymbol}
      </h2>
      <ul className="list-none p-0">
        {limitedPredictions.map((price, index) => (
          <li key={index} className="py-2 border-b border-gray-200 text-lg">
            {price.toFixed(2)}
          </li>
        ))}
      </ul>
      {plotUrl && (
        <img
          src={plotUrl}
          alt="Prediction Plot"
          className="w-full h-auto mt-5 rounded-lg shadow-md"
        />
      )}
    </div>
  );
};

export default StockPrediction;
