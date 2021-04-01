import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import "./App.css";

function App() {
  const [flashcards, setFlashcards] = useState(FLASHCARD_SAMPLE);
  return <FlashcardList flashcards={flashcards} />;
}

const FLASHCARD_SAMPLE = [
  {
    id: 1,
    question: "what is 1 + 1 ?",
    answer: "2",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 2,
    question: "what is your name ?",
    answer: "Tameem",
    options: ["salim", "Ahmad", "Mila", "Tameem"],
  },
];

export default App;
