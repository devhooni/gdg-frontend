function CountNumber({ count }) {
  const color = count > 0 ? `rgb(${count}, 0, 0)` : "black";

  const h2Style = {
    fontSize: "30px",
    color: color,
  };

  return <h2 style={h2Style}>{count}</h2>;
}

export default CountNumber;
