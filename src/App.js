import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashcardList from "./FlashcardList";
import "./App.css";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((response) =>
      setFlashcards(
        response.data.results.map((questionItem, index) => {
          const answer = decodeText(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeText(a)),
            answer,
          ];
          return {
            id: `${index}-${Date.now()}`,
            question: decodeText(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      )
    );
  }, []);

  function decodeText(str) {
    const textArea = document.createElement("textArea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div>
      <FlashcardList flashcards={flashcards} />;
    </div>
  );
}

// const FLASHCARD_SAMPLE = [
//   {
//     id: 1,
//     question: "what is 1 + 1 ?",
//     answer: "2",
//     options: ["1", "2", "3", "4"],
//   },
//   {
//     id: 2,
//     question: "what is your name ?",
//     answer: "Tameem",
//     options: ["salim", "Ahmad", "Mila", "Tameem"],
//   },
// ];

export default App;
