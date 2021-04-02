import { useState, useEffect, useRef } from "react";

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");

  const frontEl = useRef();
  const backEl = useRef();

  const maxHeight = () => {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(() => Math.max(frontHeight, backHeight, 100));
  };

  useEffect(maxHeight, [
    flashcard.question,
    flashcard.options,
    flashcard.answer,
  ]);

  useEffect(() => {
    window.addEventListener("resize", maxHeight);
    return () => window.removeEventListener("resize", maxHeight);
  }, []);

  return (
    <div
      onClick={() => setFlip(!flip)}
      style={{ height: height }}
      className={`card ${flip ? "flip" : ""}`}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return (
              <div className="flashcard-option" key={option}>
                {" "}
                {option}{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
};

export default Flashcard;
