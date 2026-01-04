import { useState, useEffect } from "react";

function Question({ questionData, onNext, currentQuestion }) {
  const [selectedOption, setSelectedOption] = useState(null);

  //  RESET selection when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [questionData]);

  const handleOptionClick = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
    }
  };

  return (
    <div>
      <h2>
        {currentQuestion + 1}. {questionData.question}
      </h2>

      {questionData.options.map((option, index) => {
        let backgroundColor = "#e0e0e0";
        let textColor = "#000";

        //  SHOW COLORS ONLY AFTER CLICK
        if (selectedOption !== null) {
          if (index === questionData.answer) {
            backgroundColor = "green";
            textColor = "white";
          } else if (index === selectedOption) {
            backgroundColor = "red";
            textColor = "white";
          }
        }

        return (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            style={{
              display: "block",
              width: "100%",
              margin: "10px 0",
              padding: "10px",
              backgroundColor,
              color: textColor,
              border: "1px solid #ccc",
              cursor: selectedOption === null ? "pointer" : "not-allowed"
            }}
          >
            {option}
          </button>
        );
      })}

      {selectedOption !== null && (
        <button
          onClick={() => onNext(selectedOption)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Next Question
        </button>
      )}
    </div>
  );
}

export default Question;
