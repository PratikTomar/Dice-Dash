import React, { useState } from "react";
import "./dice.css";

const DiceGame = () => {
  const [rollDice, setRollDice] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDiceHandler = () => {
    if (!isRolling) {
      setIsRolling(true);
      setTimeout(() => {
        setRollDice(Math.floor(Math.random() * 6) + 1);
        setIsRolling(false);
      }, 1000);
    }
  };

  // console.log(rollDice);
  // Math.random will give values like 0.1, 0.2,0.3 meaning floating value.This will generate values to 0 to 1 (0 is inclusive but 1 is exclusive)
  // So we will use Math.floor but this will give 0 as well thus we will add +1 to it

  return (
    <div className="dice-container">
      <h1>Dice Dash: Roll and Win</h1>
      <div
        className={`dice-image-container ${isRolling ? `dice-rolling` : ``}`}
      >
        <img
          src={
            rollDice === null
              ? `./assets/dice-default.png`
              : `./assets/dice-six-faces-${rollDice}.png`
          }
          alt="Dice"
        ></img>
      </div>

      <button onClick={rollDiceHandler}>
        {!isRolling ? "Roll Dice" : "Rolling..."}
      </button>
    </div>
  );
};

export default DiceGame;
