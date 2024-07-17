import numpy as np
import pandas as pd
import yfinance as yf
from keras.models import load_model
from flask import Flask, request, jsonify
from threading import Thread
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt
import io
import base64

model_path = '/home/dexy/predict/backend/Stock Predictions Model.h5'
model = load_model(model_path)

app = Flask(__name__)


@app.route('/predict', methods=['GET'])
def predict():
    stock_symbol = request.args.get('symbol', default='GC=F', type=str)
    start = '2012-01-01'
    end = '2024-05-31'

    data = yf.download(stock_symbol, start=start, end=end)

    data_train = pd.DataFrame(data['Close'][0: int(len(data) * 0.80)])
    data_test = pd.DataFrame(data['Close'][int(len(data) * 0.80): len(data)])

    scaler = MinMaxScaler(feature_range=(0, 1))
    pas_100_days = data_train.tail(100)
    data_test = pd.concat([pas_100_days, data_test], ignore_index=True)
    data_test_scaled = scaler.fit_transform(data_test)

    x, y = [], []
    for i in range(100, data_test_scaled.shape[0]):
        x.append(data_test_scaled[i-100:i])
        y.append(data_test_scaled[i, 0])

    x, y = np.array(x), np.array(y)

    predictions = model.predict(x)
    scale = 1 / scaler.scale_[0]
    predictions = predictions * scale
    y = y * scale

    plt.style.use('dark_background')
    plt.figure(figsize=(10, 5))
    plt.plot(y, label='Original Price', color='green')
    plt.plot(predictions, label='Predicted Price', color='red')
    plt.title(f'Original vs Predicted Prices for {stock_symbol}')
    plt.xlabel('Days')
    plt.ylabel('Price')
    plt.legend()
    plt.grid(True)

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plot_url = base64.b64encode(img.getvalue()).decode('utf8')
    plt.close()

    return jsonify({
        'predicted_prices': predictions.flatten().tolist(),
        'plot_url': f"data:image/png;base64,{plot_url}"
    })


def run_flask():
    app.run(port=5000)


if __name__ == '__main__':
    Thread(target=run_flask).start()
