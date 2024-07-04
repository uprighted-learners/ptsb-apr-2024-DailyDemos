import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  // add our state hook

  const [riskLevel, setRiskLevel] = useState("extreme");

  const [weather, setWeather] = useState("sunny");
  const [lat, setLat] = useState(12.1);
  const [long, setLong] = useState(22.1);

  // dont mark callback function as async
  // this runs just once because the dependency array is include and empty

  useEffect(() => {
    const url = "https://swapi.dev/api/people/1";
    const fetchSwapi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        // this will only put data into the console, no interaction with the component
        console.log(data);
      } catch (ex) {
        // setError state
      }
    };

    fetchSwapi();
  }, []);

  // this will rerun on each rerender i.e. when the radio buttons get changed
  useEffect(() => {
    const url = "https://swapi.dev/api/people/2";
    const fetchSwapi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        // this will only put data into the console, no interaction with the component
        console.log(data);
      } catch (ex) {
        // setError state
      }
    };

    fetchSwapi();
  });

  useEffect(() => {
    //TODO - inject lat an long into url
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true";
    const fetchWeather = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        // this will only put data into the console, no interaction with the component
        setWeather(data.current_weather.temperature);
      } catch (ex) {
        // setError state
      }
    };

    fetchWeather();
  }, [lat, long]);

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
      <h1>Smokey the Bear warns you!</h1>
      <div className="radio-buttons">
        <label>
          Low Risk
          <input
            type="radio"
            value="low"
            checked={riskLevel === "low"}
            onChange={() => setRiskLevel("low")}
          />
        </label>
      </div>
      <div className="radio-buttons">
        <label>
          Moderate Risk
          <input
            type="radio"
            value="moderate"
            checked={riskLevel === "moderate"}
            onChange={() => setRiskLevel("moderate")}
          />
        </label>
      </div>
      <div className="image-container">
        <img
          src={getImageByRiskLevel(riskLevel)}
          alt={`Smokey the Bear - ${riskLevel} risk`}
        />
      </div>
      {/* <h3>This is the temp: {weather}</h3> */}

      {/* todo set lat long from here */}
    </div>
  );
}

export default App;
