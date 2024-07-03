// eslint-disable-next-line react/prop-types
function FarenheightToCelsius(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.ftc.value);
    const valueFromInput = e.target.ftc.value;
    const farenheight = parseFloat(valueFromInput);
    const celsius = (farenheight - 32) * (5 / 9);
    props.onConversion(celsius);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ftc">Temperature: Fahrenheit to Celsius</label>
        <input type="text" id="ftc" name="ftc" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FarenheightToCelsius;
