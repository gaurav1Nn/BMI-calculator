

import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0); 
  const [height, setHeight] = useState(0); 
  const [bmi, setBmi] = useState(''); 
  const [category, setCategory] = useState(""); 

 
  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);
      setCategory(getBMICategory(bmiValue));
    }
  };

  
  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obesity";
  };


  const resetFields = () => {
    setWeight(0);
    setHeight(0);
    setBmi('');
    setCategory("");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>BMI Calculator</h1>
      <div style={{ margin: "20px" }}>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
            style={{ margin: "10px" }}
          />
        </label>
      </div>
      <div style={{ margin: "20px" }}>
        <label>
          Height (m):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
            style={{ margin: "10px" }}
          />
        </label>
      </div>
      <button onClick={calculateBMI} style={{ margin: "10px" }}>
        Calculate
      </button>
      <button onClick={resetFields} style={{ margin: "10px" }}>
        Reset
      </button>
      {bmi && (
        <div style={{ marginTop: "20px",color: "black" }}>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
