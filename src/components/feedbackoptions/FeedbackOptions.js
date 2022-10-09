import PropTypes from 'prop-types';

import {
    Buttons,
    Btn,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Buttons>
            {options.map(option => (
                <Btn type="button" onClick={onLeaveFeedback} key={option}>{option}</Btn>
            ))}
        </Buttons>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;