import { React, useState } from "react";
import "./App.css";
import clipart from "./clipart.png";

function App() {
  const [date, setDate] = useState();
  const [number, setNumber] = useState();
  const [warning, setWarning] = useState(false);
  const [message, setMessage] = useState();

  function handleClick(e) {
    e.preventDefault();

    if (date === undefined || number === undefined) {
      setWarning(true);
      return;
    }

    if (date.trim() === "" || number.trim() === "") {
      setWarning(true);
      return;
    }

    setWarning(false);

    let sum = 0;
    let i = 0;
    let length = date?.length;

    //01-11-2000
    //calc sum of number, in case of above date 5
    while (i < length) {
      if (date.charAt(i) === "-") {
        i++;
        continue;
      }

      sum += parseInt(date.charAt(i));
      i++;
    }

    if (number && sum % number === 0) {
      setMessage(number + " is a lucky number 🤩🤩🥳🥳");
    } else {
      setMessage(number + " is NOT so lucky number 🙁🙁");
    }
  }

  return (
    <div className="App">
      <img className="clipart-img" src={clipart} alt="" />

      <h2 className="main-heading">Is your Birthday Lucky? 🎂</h2>

      <div className="input-fields">
        <label htmlFor="dateofbirth">Your Birth Date: </label>

        <input
          onChange={(e) => setDate(e.target.value)}
          className="input-fields__input"
          type="date"
          name="dateofbirth"
          id="dOB"
        />
      </div>

      <div className="input-fields">
        <label htmlFor="luckynumber">Your Lucky Number: </label>

        <input
          onChange={(e) => setNumber(e.target.value)}
          className="input-fields__input"
          type="number"
          name="dateofbirth"
          id="luckyNo"
          placeholder="Enter a number"
        />
      </div>

      <div>
        <button className="btn" onClick={handleClick}>
          Let's Go
        </button>
      </div>

      {warning ? (
        <div className="message">Fields must not be blank</div>
      ) : message ? (
        <div className="message">{message}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
