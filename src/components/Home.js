import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="container">
      <div className="quiz-box">
        <h3 className="quiz-heading">upraised</h3>
        <h1 className="quiz-name">Quiz</h1>
        <button className="start-button" onClick={startQuiz}>Start</button>
      </div>
    </div>
  );
}

export default Home;