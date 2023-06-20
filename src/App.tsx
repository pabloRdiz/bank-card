import "./App.css";
import { Card } from "./components";

import { useState } from "react";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    console.log("flip");
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div className="app-container">
        <h1>Credit Debit card</h1>
        <Card flipped={isFlipped} />
        <button
          className="flip-button"
          onMouseOver={() => console.log("over")}
          onClick={() => flipCard()}
        >
          Flip 2
        </button>
      </div>
    </>
  );
}

export default App;
