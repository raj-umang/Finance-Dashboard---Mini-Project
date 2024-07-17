import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

const TensorFlowComponent = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await tf.loadLayersModel('/models/model.json'); // Update this path to your model's JSON file
        setModel(model);
        console.log('Model loaded successfully');
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, []);

  const predict = async () => {
    if (model) {
      // Create a tensor to pass to the model for prediction
      const inputTensor = tf.tensor([/* Your input data here */]);

      // Perform prediction
      const prediction = model.predict(inputTensor);
      prediction.print(); // Print the prediction
    }
  };

  return (
    <div>
      <h1>TensorFlow.js with Next.js</h1>
      <button onClick={predict}>Predict</button>
    </div>
  );
};

export default TensorFlowComponent;
