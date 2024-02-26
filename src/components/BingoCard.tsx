import React, { useState } from "react";
import "../styles/BingoCard.css";

interface Props {
  words: string[];
}

const BingoCard: React.FC<Props> = ({ words }) => {
    const [shuffledWords, setShuffledWords] = useState<string[]>(words);
    const [boxState, setBoxState] = useState<boolean[]>(Array(25).fill(false));
  
    const shuffle = () => {
      const shuffled = [...shuffledWords];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledWords(shuffled);
      setBoxState(Array(25).fill(false));
    };
  
    const handleClick = (index: number) => {
      const newBoxState = [...boxState];
      newBoxState[index] = !newBoxState[index];
      setBoxState(newBoxState);
    };
  
    const rows = [];
    for (let i = 0; i < 5; i++) {
      const cells = [];
      for (let j = 0; j < 5; j++) {
        const index = i * 5 + j;
        const boxClassName = "box" + (boxState[index] ? " active" : "");
        cells.push(
          <div key={index} className={boxClassName} onClick={() => handleClick(index)}>
            {index !== 12 ? shuffledWords[index] : "FREE SPACE"}
          </div>
        );
      }
      rows.push(<div key={i} className="row">{cells}</div>);
    }
  
    return (
      <div className="grid-container">
        <h1>Bingo Card</h1>
        <div className="grid">{rows}</div>
        <button onClick={shuffle}>Shuffle</button>
      </div>
    );
  };
  
  export default BingoCard;
