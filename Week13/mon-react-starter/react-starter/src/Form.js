import { useState } from "react";

function Form() {
  const [typing, setTyping] = useState(""); // input begins blank

  const handleChange = (e) => {
    setTyping(e.target.value); // update state with what the person typed
  };
  const handleSubmit = () => {
    console.log(typing); // I can grab this data from state instead of the form itself now
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={typing} />
      {/*                                        IMPORTANT 👆*/}
      <input type="submit" />
    </form>
  );
}

export default Form;
