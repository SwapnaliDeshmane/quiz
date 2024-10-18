import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const mockQuestions = [
  {
    id: 1,
    text: "Which of the following is used in React.js to increase performance?",
    choices: [
      { id: 1, text: "Virtual DOM" },
      { id: 2, text: "Original DOM" },
      { id: 3, text: "Both A and B" },
      { id: 4, text: "None of the above" }
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 2,
    text: "What is ReactJS?",
    choices: [
      { id: 1, text: "Server-side framework" },
      { id: 2, text: "User Interface framework" },
      { id: 3, text: "both a and b" },
      { id: 4, text: "None of the above" }
    ],
    correctAnswer: [2],
    multipleCorrect: false
  }
];

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(mockQuestions);
  }, []);

  const handleAnswer = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const submitAnswer = () => {
    const currentQ = questions[currentQuestion];
    if (currentQ.correctAnswer.includes(selectedAnswer)) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    navigate(`/report?score=${score + 1}`);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const question = questions[currentQuestion];

  return (
    <div className="container">
      <div className="quiz-box1">
        <div className="progress-bar">
          <div className="progress" style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}></div>
        </div>
        <h2>{question.text}</h2>
        <div className="choices">
          {question.choices.map((choice) => (
            <label key={choice.id} className={`choice ${selectedAnswer === choice.id ? 'selected' : ''}`}>
              <input
                type="radio"
                name="answer"
                value={choice.id}
                checked={selectedAnswer === choice.id}
                onChange={() => handleAnswer(choice.id)}
              />
              {choice.text}
            </label>
          ))}
        </div>
        <button className="next-button" onClick={submitAnswer} disabled={selectedAnswer === null}>
          {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
}

export default Quiz;