import { useReducer } from 'react';
import Section from './section';
import FeedbackOptions from './feedbackoptions';
import Notification from './notification';
import Statistic from './statistic';
import optionReducer from '../templates/optionreducer';
import options from '../options.json';

const App = () => {
  const [good, dispatchGood] = useReducer(optionReducer, 0);
  const [neutral, dispatchNeutral] = useReducer(optionReducer, 0);
  const [bad, dispatchBad] = useReducer(optionReducer, 0);

  const total = good + neutral + bad;
  const positivePercentage = Math.floor(good / total * 100);

  const onLeaveFeedback = (e) => {
    switch (e.target.textContent) {
      case options[0]:
        dispatchGood(1);
        break;

      case options[1]:
        dispatchNeutral(1);
        break;

      case options[2]:
        dispatchBad(1);
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