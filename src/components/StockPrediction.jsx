import { useState } from "react";

const StockPrediction = () => {
  const [tickers, setTickers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddTicker = (e) => {
    e.preventDefault();
    const value = inputValue.trim().toUpperCase();
    if (value.length < 3) {
      setError("A ticker must be at least 3 letters. E.g. TSLA for Tesla.");
    } else if (tickers.length >= 3) {
      setError("You can add up to 3 tickers only.");
    } else if (tickers.includes(value)) {
      setError("Ticker already added.");
    } else {
      setTickers([...tickers, value]);
      setInputValue("");
      setError("");
    }
  };
  return (
    <>
      <h1>StockPrediction - {inputValue}</h1>
      <div>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <br />
        <input
          type="text"
          name="inputValue"
          id="inputValue"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleAddTicker}>ADD</button>
        <section>{tickers}</section>
        <button>Generate Report</button>
      </div>
    </>
  );
};
export default StockPrediction;
