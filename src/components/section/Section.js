import PropTypes from 'prop-types';

import { Card, Title } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <Card>
        <Title>{title}</Title>
        { children }
        </Card >
    )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default Section;