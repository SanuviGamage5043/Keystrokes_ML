import { useState } from "react";
import axios from "axios";

function App() {
  const [keystrokes, setKeystrokes] = useState([]);
  const [result, setResult] = useState("");

  const handleKeyDown = (e) => {
    if (e.key.length === 1) {
      setKeystrokes((prev) => [
        ...prev,
        {
          key: e.key,
          press_time: Date.now(),
        },
      ]);
    }
  };

  const handleKeyUp = () => {
    setKeystrokes((prev) => {
      const updated = [...prev];
      if (updated.length > 0) {
        updated[updated.length - 1].release_time = Date.now();
      }
      return updated;
    });
  };

  const authenticate = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/predict",
        keystrokes
      );

      setResult(`Predicted User: ${res.data.predicted_user}`);
    } catch (err) {
      setResult("Error in prediction");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Keystroke Authentication</h1>

      <p>Type this sentence:</p>
      <p><b>The quick brown fox jumps over the lazy dog</b></p>

      <input
        type="text"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        style={{ width: "300px", padding: "10px" }}
      />

      <br /><br />

      <button onClick={authenticate}>Authenticate</button>

      <p>{result}</p>
    </div>
  );
}

export default App;