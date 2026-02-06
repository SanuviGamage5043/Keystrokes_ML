# User Authentication via Keystrokes

## 🚀 Project Overview

This project implements a machine learning-based user authentication system using keystroke dynamics. By analyzing typing patterns captured from key dwell time, flight time, and keycodes, the system identifies users based on their unique typing behavior, enhancing security beyond traditional passwords.

### Key highlights:  
- User authentication using keystroke patterns  
- Data preprocessing including encoding, scaling, and feature engineering  
- Classification using **Random Forest**, **Decision Tree**, and **K-Nearest Neighbors (KNN)**  
- Model evaluation using metrics such as accuracy, precision, recall, and F1-score  
- Train-test split for reliable performance evaluation

## 🛠 Technology Stack

| Layer          | Technology                        | Purpose                                               |
|----------------|-----------------------------------|-------------------------------------------------------|
| Programming    | Python                            | Core development of ML pipeline and preprocessing     |
| Dataset        | Kaggle Keystrokes Dataset         | Capture typing patterns of users for model training   |
| ML Models      | Random Forest, Decision Tree, KNN | Classify users based on typing dynamics               |
| Data Processing| pandas, NumPy, scikit-learn       | Preprocessing, encoding, scaling, and train-test split|
| Evaluation     | scikit-learn metrics              | Accuracy, precision, recall, F1-score                 |

## 🗂 Project Structure

Keystrokes_ML/

├─ data/                  ← Dataset CSV files

├─ notebooks/             ← Jupyter notebooks for experimentation

├─ src/                   ← Python scripts for preprocessing and training

│  ├─ preprocessing.py    ← Data preprocessing and feature engineering

│  ├─ train_model.py      ← Train and save ML models

│  └─ evaluate_model.py   ← Evaluate models and generate metrics

├─ requirements.txt       ← Python dependencies

└─ README.md

## ⚡ Features

- Data Preprocessing: Handles missing values, scales features, and encodes data
- Train-Test Split: Ensures unbiased performance measurement  
- Multiple ML Models: Decision Tree, Random Forest, and KNN for comparison
- User Authentication: Classifies users based on typing patterns  
- Evaluation Metrics:Computes accuracy, precision, recall, and F1-score

## 🏃 How to Run

### Prerequisites

- Python 3.8+  
- pip installed  

### Steps

#### 1. Clone the repository:
    ```bash
    git clone https://github.com/SanuviGamage5043/Keystrokes_ML.git
    cd Keystrokes_ML
    '''
    
#### 2. Install Dependencies
    pip install -r requirements.txt

#### 3. Run preprocessing and training scripts
    python src/preprocessing.py
    python src/train_model.py

#### 4. Evaluate models
    python src/evaluate_model.py

#### 5. View results
Evaluation metrics and trained models will be saved in the outputs/ folder.

## ✨ Contributing

### We welcome contributions:

- Add more ML models or improve existing pipelines
- Optimize feature engineering techniques
- Implement real-time typing authentication
- Submit Pull Requests with clear descriptions

## 📌 Dataset

The dataset used in this project is from https://www.kaggle.com/datasets/noelsmathew/keystrokes
