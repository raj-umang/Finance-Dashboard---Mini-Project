// app/components/StockPrediction.js

import { useEffect, useState } from "react";
import styles from "./stock.module.css";

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
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Predicted Prices for {stockSymbol}</h2>
        <ul className={styles.list}>
          {limitedPredictions.map((price, index) => (
            <li key={index} className={styles.listItem}>
              ${price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      {plotUrl && (
        <div className={styles.plotContainer}>
          <div className={styles.plotHeader}>Price Prediction Graph</div>
          <img
            src={plotUrl}
            alt="Prediction Plot"
            className={styles.plotImage}
          />
        </div>
      )}
    </div>
  );
};

export default StockPrediction;
