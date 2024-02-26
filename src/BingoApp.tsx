import React from "react";
import ShuffleWords from "./components/BingoCard";
import './App.css'

const WORDS: string[] = []
for(let i=1; i <= 25; i++) {
  WORDS.push(`${i}`)
}

function BingoApp() {
  return (
    
    <div className="App">      
      <ShuffleWords words={WORDS}/>
    </div>
  );
}

export default BingoApp