import React from "react";
import ShuffleWords from "./components/BingoCard";
import './App.css'



// *** DELETE THIS if setting your own WORDS array ***
// Fill out WORDS array w/ numbers for example
const exampleList = (range: number): string[] => {
  let temp = []
  for(let i=1; i <= range; i++) {
    temp.push(`${i}`)
  }
  return temp
}

// *** Hard-code list of strings you want to use here. ***
const WORDS: string[] = exampleList(99)

function BingoApp() {
  return (
    
    <div className="App">      
      <ShuffleWords words={WORDS}/>
    </div>
  );
}

export default BingoApp