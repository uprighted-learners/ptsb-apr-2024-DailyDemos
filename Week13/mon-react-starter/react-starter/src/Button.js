function Button(props) {
  return (
    <button style={buttonStyle}>
      {props.name}
      {props.yabbadabba}
    </button>
  );
}

const buttonStyle = {
  padding: "10px",
  fontSize: "16px",
  color: "rebeccapurple",
};

export default Button;
