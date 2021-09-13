import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
      setCount("1");
    }
    if (count > 8) {
      amount = data.length;
      setCount(data.length);
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <div className="container">
        <h3>מחולל לורם-איפסום</h3>

        <form className="lorem-form" onSubmit={handleSubmit}>
          <button type="submit" className="btn toRight">
            חולל!
          </button>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => {
              const val =
                e.target.value >= data.length
                  ? data.length
                  : e.target.value < 1
                  ? 1
                  : e.target.value;
              setCount(val);
            }}
          />
          <label htmlFor="amount" className="toRight">
            פסקאות:
          </label>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return (
              <p key={index} className="toRight">
                {item}
              </p>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
