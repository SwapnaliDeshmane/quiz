import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

function Report() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseInt(searchParams.get('score') || '0');
  const totalQuestions = 2; // Update this based on your total questions
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const correctCount = score;
  const incorrectCount = totalQuestions - score;

  const startAgain = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="quiz-box1">
          <h1 className="results-title">Your result</h1>
          
          <div className="score-circle">
            <span className="score">{score}</span>
            <span className="total">/ 2</span>
          </div>

          <div className="results-stats">
            <div className="stat-item correct">
              <div className="stat-dot correct"></div>
              <span className="stat-count">{correctCount}</span>
              <span className="stat-label">Correct</span>
            </div>
            
            <div className="stat-item incorrect">
              <div className="stat-dot incorrect"></div>
              <span className="stat-count">{incorrectCount}</span>
              <span className="stat-label">Incorrect</span>
            </div>
          </div>

          <button 
            className="start-button"
            onClick={startAgain}
          >
            Start Again
          </button>
      </div>
    </div>
  );
}

export default Report;