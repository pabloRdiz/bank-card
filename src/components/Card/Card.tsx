import "./Card.style.css";
import card from "./assets/blank-credit-card.png";
import cardBack from "./assets/blank-debit-card-black-yellow.png";

const rotateLess180deg = "perspective(1000px) rotateY(-180deg)";
const rotateTo0deg = "perspective(1000px) rotateY(0deg)";
const rotateMore180deg = "perspective(1000px) rotateY(180deg)";

export const Card = ({ flipped }: { flipped: boolean }) => {
  return (
    <div className="card-container">
      <div className="card-inner">
        <div
          className="front"
          style={{ transform: flipped ? rotateLess180deg : rotateTo0deg }}
        >
          <img src={card} alt="" />
          <div className="content">
            <p>frontfrontfrontfrontfrontfront fron</p>
            <p>cvv</p>
          </div>
        </div>
        <div
          className="back"
          style={{ transform: flipped ? rotateTo0deg : rotateMore180deg }}
        >
          <img src={cardBack} alt="" />
          <div className="content">
            <p>front</p>
            <p>cvv</p>
          </div>
        </div>
      </div>
    </div>
  );
};
