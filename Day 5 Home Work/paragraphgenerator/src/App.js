import ParagraphDisplay from "./Components/ParagraphDisplay.js";
import paragraph from "./paragraph.json";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [userInput, setUserInput] = useState(0);
  const [count, setCount] = useState(0);

  const changeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const clickHandler = () => {
    if (userInput < 0) {
      alert("Ayyo ! you know that you write negative input 😵");
      setUserInput("");
      setCount(0);
    } else if (userInput >= 10) {
      alert(
        "Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀"
      );
      setUserInput("");
      setCount(0);
    } else if (userInput == 0) {
      alert(
        "Ayyo ! you know that you have a Empty input or you want 0 Paragraphs 🤔"
      );
      setUserInput("");
      setCount(0);
    } else {
      setCount(userInput);
    }
  };

  return (
    <div className="container">
      <h1>TIRED OF BROING LOREM IPSUM?</h1>
      <div className="search">
        <label>Paragraphs:</label>
        <input type="number" value={userInput} onChange={changeHandler} />
        <button className="button" type="button" onClick={clickHandler}>
          Generate
        </button>
      </div>
      <ParagraphDisplay data={paragraph} numberOfParagraphs={count} />
    </div>
  );
};

export default App;
