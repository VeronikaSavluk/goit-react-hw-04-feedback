import PropTypes from 'prop-types';

import { Options, Option } from './Statistic.styled';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <Options>
        <Option>Good: {good}</Option>
        <Option>Neutral: {neutral}</Option>
        <Option>Bad: {bad}</Option>
        <Option>Total: {total}</Option>
        <Option>Positive Feedback: {positivePercentage}%</Option>
      </Options>
    );
  }

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistic;