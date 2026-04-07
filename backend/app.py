from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load Random Forest model
model = pickle.load(open("rf_model.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    # Feature extraction (match your training features)
    hold_times = [
        k['release_time'] - k['press_time']
        for k in data if 'release_time' in k
    ]

    if len(hold_times) < 2:
        return jsonify({"error": "Not enough data"}), 400

    mean_hold = np.mean(hold_times)
    std_hold = np.std(hold_times)

    features = np.array([[mean_hold, std_hold]])

    # Scale features
    features = scaler.transform(features)

    # Predict participant
    prediction = model.predict(features)

    return jsonify({
        "predicted_user": int(prediction[0])
    })

if __name__ == "__main__":
    app.run(debug=True)