import React, { useState } from 'react';
import Container from './components/container';
import Title from './components/title';
import Controls from './components/controls';
import FeedbackOptions from './components/feedbackOptions';
import Statistics from './components/statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  const options = { bad, good, neutral };
  const optionsValues = Object.keys(options);

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Title title="Please, leave your feedback" />
      <Controls>
        {optionsValues.map(item => (
          <FeedbackOptions
            key={item}
            option={item}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </Controls>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        positivePercentage={positivePercentage}
      />
    </Container>
  );
}

export default App;
