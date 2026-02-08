import React, { useState } from "react";
import "./App.css";

// Ensure these point to your actual files in the public folder
const IMG_ASKING = "/assets/bongo-cat-sweet.gif";
const IMG_SUCCESS = "/assets/dare-aggie-dare-aggie-bunny.gif";

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);

  // Phrases that appear when you click "No"
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  // Calculate the text for the "No" button based on how many times it was clicked
  // If we run out of phrases, just show the last one
  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="container">
      {yesPressed ? (
        /* --- SUCCESS STATE --- */
        <div className="content">
          <img src={IMG_SUCCESS} alt="Yay!" className="gif success-gif" />
          <div className="text-success">Yay! See you on the 14th! ❤️</div>
        </div>
      ) : (
        /* --- ASKING STATE --- */
        <div className="content">
          <img src={IMG_ASKING} alt="Please?" className="gif asking-gif" />
          <h1 className="header-text">Will you be my Valentine?</h1>

          <div className="button-container">
            <button
              className="btn yes-btn"
              style={{ fontSize: noCount * 20 + 16 }} // Grows by 20px each click
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              className="btn no-btn"
              onClick={() => setNoCount(noCount + 1)}
            >
              {getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;