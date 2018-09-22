import React from 'react';
import PropTypes from 'prop-types';

import { CardStyled } from './styles';

const Card = ({ children }) => (
  <CardStyled>
    {children}
  </CardStyled>
);
Card.propTypes = {
  children: PropTypes.node,
};
Card.defaultProps = {
  children: null,
};

export default Card;
