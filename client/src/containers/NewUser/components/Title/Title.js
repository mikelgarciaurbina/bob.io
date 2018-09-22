import React from 'react';
import PropTypes from 'prop-types';

import { TitleStyled } from './styles';

const Container = ({ children }) => (
  <TitleStyled>
    {children}
  </TitleStyled>
);
Container.propTypes = {
  children: PropTypes.node,
};
Container.defaultProps = {
  children: null,
};

export default Container;
