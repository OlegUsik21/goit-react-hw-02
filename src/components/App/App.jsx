import { useEffect, useState } from 'react'
import './App.css'

import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

function App() {

  const [feedback, setFeedback] = useState(() => {
  const savedFeedback = localStorage.getItem('feedback');
  return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });
  
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <div>
      <Description />
      <Options
          feedback={feedback}
          setFeedback={setFeedback}
          totalFeedback={totalFeedback}
          handleFeedback={handleFeedback}
          resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback} /> : <Notification message="No feedback given" />}
    </div>
  )
}
export default App
