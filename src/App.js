import { useState } from "react";
import questions from "./data";
import Question from "./Question";
import Result from "./Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };


  const handleNext = (selectedIndex) => {
  if (selectedIndex === questions[currentQuestion].answer) {
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;

  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowResult(true);
  }
};


  return (
    <div className="container">
      <h1>Quiz Application</h1>

      {showResult ? (
  <div>
    <Result score={score} total={questions.length} />

    <button
      onClick={restartQuiz}
      style={{ marginTop: "20px", padding: "10px 20px" }}
    >
      Restart Quiz
    </button>
  </div>
) : (
<Question
  questionData={questions[currentQuestion]}
  onNext={handleNext}
  currentQuestion={currentQuestion}
/>



)}

    </div>
  );
}

export default App;
