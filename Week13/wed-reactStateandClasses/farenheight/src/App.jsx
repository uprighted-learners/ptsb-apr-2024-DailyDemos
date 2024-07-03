import { useState } from "react";
import "./App.css";
import FarenheightToCelsius from "./FarenheightToCelsius";

function App() {
  const [celsius, setCelsius] = useState(0);

  function handleFarenheightConversion(celsiusValue) {
    setCelsius(celsiusValue);
  }

  //handleFarenheightConversion(someOtherProperty)

  return (
    <>
      <FarenheightToCelsius onConversion={handleFarenheightConversion} />

      {/* Output the celsius value */}
      <h3>The celsius is {celsius}</h3>
    </>
  );
}

export default App;
