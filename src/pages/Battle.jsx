import { useState, useEffect } from "react";

const questions = [
  {
    question: "What is the output of this code?",
    code: "int[] arr = {2, 4, 6};\nSystem.out.println(arr[1]);",
    options: ["2", "4", "6", "Error"],
    answer: "4",
    topic: "Arrays",
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    code: "",
    options: ["implements", "extends", "inherits", "super"],
    answer: "extends",
    topic: "OOP",
  },
  {
    question: "What is the output of this code?",
    code: 'String s = "Java";\nSystem.out.println(s.length());',
    options: ["3", "4", "5", "Error"],
    answer: "4",
    topic: "Strings",
  },
  {
    question: "Which index does an array start from in Java?",
    code: "",
    options: ["-1", "0", "1", "Depends on size"],
    answer: "0",
    topic: "Arrays",
  },
  {
    question: "Which method is the entry point of a Java program?",
    code: "",
    options: ["start()", "run()", "main()", "init()"],
    answer: "main()",
    topic: "Java Basics",
  },
];

function Battle() {
  const [selectedMode, setSelectedMode] = useState("Quick Match");
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (!started || finished) return;

    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [started, finished, timeLeft]);

  function startBattle() {
    if (selectedMode !== "Quick Match") {
      alert("This mode will be available soon!");
      return;
    }

    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setAnswered(false);
    setFinished(false);
    setTimeLeft(300);
    setStarted(true);
  }

  function submitAnswer() {
    if (!selectedAnswer || answered) return;

    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 50);
    }

    setAnswered(true);
  }

  function nextQuestion() {
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setAnswered(false);
    }
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(remainingSeconds).padStart(2, "0")
    );
  }

  const modes = [
    {
      name: "Quick Match",
      icon: "⚡",
      description: "Solve five MCQs against the clock.",
      time: "5 Minutes",
      problems: "5 Questions",
    },
    {
      name: "Survival Mode",
      icon: "🛡️",
      description: "Complete three challenges before time runs out.",
      time: "15 Minutes",
      problems: "3 Problems",
    },
    {
      name: "Skill Challenge",
      icon: "🧠",
      description: "Focus on a topic and improve your coding skills.",
      time: "Choose Topic",
      problems: "Build Skills",
    },
  ];

  return (
    <div className="solo-battleground">
      <header className="battle-header">
        <p className="battle-tag">ALGO ARENA / SOLO MODE</p>
        <div className="battle-icon">⚔️</div>
        <h1>Solo Battleground</h1>
        <p className="battle-subtitle">
          Enter the arena. Solve challenges. Beat your best.
        </p>
      </header>

      {!started ? (
        <>
          <section className="battle-stats">
            <div className="battle-stat-card">
              <span>Today's Goal</span>
              <h2>5 Questions</h2>
              <p>Challenge yourself today</p>
            </div>

            <div className="battle-stat-card">
              <span>Best Score</span>
              <h2>250 XP</h2>
              <p>Maximum possible per match</p>
            </div>

            <div className="battle-stat-card">
              <span>Battle Duration</span>
              <h2>05:00</h2>
              <p>Race against the clock</p>
            </div>
          </section>

          <section className="battle-section">
            <div className="battle-section-heading">
              <h2>Choose Your Battle</h2>
              <p>Select a mode and test your coding skills.</p>
            </div>

            <div className="battle-modes">
              {modes.map((mode) => (
                <div
                  key={mode.name}
                  className={`battle-mode-card ${
                    selectedMode === mode.name ? "selected" : ""
                  }`}
                  onClick={() => setSelectedMode(mode.name)}
                >
                  <div className="mode-icon">{mode.icon}</div>
                  <h3>{mode.name}</h3>
                  <p>{mode.description}</p>

                  <div className="mode-details">
                    <span>⏱ {mode.time}</span>
                    <span>🎯 {mode.problems}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedMode(mode.name)}
                  >
                    Select Mode
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="battle-start-panel">
            <div>
              <p className="battle-tag">READY TO FIGHT?</p>
              <h2>{selectedMode}</h2>
              <p>Your next challenge is waiting.</p>
            </div>

            <button
              type="button"
              className="start-battle-btn"
              onClick={startBattle}
            >
              ⚔️ Start Battle
            </button>
          </section>
        </>
      ) : finished ? (
        <section className="battle-result">
          <div className="battle-icon">🏆</div>
          <h2>Battle Completed!</h2>
          <p>You earned</p>
          <h1>{score} XP</h1>
          <p>
            Correct answers: {score / 50} out of {questions.length}
          </p>
          <button
            className="start-battle-btn"
            onClick={startBattle}
          >
            Play Again
          </button>
          <button
            className="battle-back-btn"
            onClick={() => setStarted(false)}
          >
            Back to Battleground
          </button>
        </section>
      ) : (
        <section className="battle-question-panel">
          <div className="question-top">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <strong>⏱ {formatTime(timeLeft)}</strong>
          </div>

          <div className="question-progress">
            <div
              style={{
                width:
                  ((currentQuestion + 1) / questions.length) * 100 + "%",
              }}
            />
          </div>

          <p className="battle-tag">
            {questions[currentQuestion].topic}
          </p>

          <h2>{questions[currentQuestion].question}</h2>

          {questions[currentQuestion].code && (
            <pre className="battle-code">
              {questions[currentQuestion].code}
            </pre>
          )}

          <div className="battle-options">
            {questions[currentQuestion].options.map((option) => (
              <button
                type="button"
                key={option}
                disabled={answered}
                className={`battle-option ${
                  selectedAnswer === option ? "chosen" : ""
                } ${
                  answered &&
                  option === questions[currentQuestion].answer
                    ? "correct"
                    : ""
                }`}
                onClick={() => setSelectedAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {answered && (
            <p className="battle-feedback">
              {selectedAnswer === questions[currentQuestion].answer
                ? "Correct! +50 XP 🎉"
                : "Incorrect! Correct answer: " +
                  questions[currentQuestion].answer}
            </p>
          )}

          {!answered ? (
            <button
              className="start-battle-btn"
              disabled={!selectedAnswer}
              onClick={submitAnswer}
            >
              Submit Answer
            </button>
          ) : (
            <button
              className="start-battle-btn"
              onClick={nextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "View Results"
                : "Next Question"}
            </button>
          )}
        </section>
      )}
    </div>
  );
}

export default Battle;