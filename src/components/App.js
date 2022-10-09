import { useState } from 'react';

import Section from './section';
import FeedbackOptions from './feedbackoptions';
import Notification from './notification';
import Statistic from './statistic';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];
  const total = good + neutral + bad;
  const positivePercentage = Math.floor(good / total * 100);

  const onLeaveFeedback = (e) => {
    switch (e.target.textContent) {
      case "good":
        setGood(good => good + 1);
        break;

      case "neutral":
        setNeutral(neutral => neutral + 1);
        break;

      case "bad":
        setBad(bad => bad + 1);
        break;
      default:
        return;
    };
  };

  return (
      <div>
          <Section title="Please leave feedback">
          <FeedbackOptions options={options}
            onLeaveFeedback={onLeaveFeedback} />
          </Section>
          <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistic good={good} neutral={neutral} bad={bad}
              total={total} positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
  );
}

export default App;