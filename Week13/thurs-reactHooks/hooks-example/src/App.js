import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  // add our state hook
  const [riskLevel, setRiskLevel] = useState("low");

  // add our icons for our 5 states of fire risk
  const lowRiskImageUrl =
    "https://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd535428.png";
  const moderateRiskImageUrl =
    "https://images.unsplash.com/photo-1525144964096-fef488107fc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const highRiskImageUrl =
    "https://images.unsplash.com/photo-1669136119731-5b2b27b53057?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const veryHighRiskImageUrl =
    "https://plus.unsplash.com/premium_photo-1661854760489-3f63e4d83eab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const extremeRiskImageUrl =
    "https://www.wate.com/wp-content/uploads/sites/42/2022/04/SEVIER-COUNTY-EMA_TDF_FIRE-DANGER-SCALE-FOR-MONDAY-4-APRIL-2022_040422.jpg?resize=349,289";
  // add the image grabber function

  function getImageByRiskLevel(risk) {
    switch (risk) {
      case "low":
        return lowRiskImageUrl;
      case "moderate":
        return moderateRiskImageUrl;
      case "high":
        return highRiskImageUrl;
      case "veryHigh":
        return veryHighRiskImageUrl;
      case "extreme":
        return extremeRiskImageUrl;
      default:
        return "errorNoCorrelatingImage";
    }
  }

  return (
    <div className="App">
      <img src={getImageByRiskLevel("high")}></img>
    </div>
  );
}

export default App;
