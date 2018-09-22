import React from 'react';
import PropTypes from 'prop-types';

import { ContainerStyled } from './styles';

const Container = ({ children }) => (
  <ContainerStyled>
    {children}
  </ContainerStyled>
);
Container.propTypes = {
  children: PropTypes.node,
};
Container.defaultProps = {
  children: null,
};

export default Container;
