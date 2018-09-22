import React from 'react';
import PropTypes from 'prop-types';

import {
  BarStyled, ContainerStyled, HighlightStyled, InputStyled, LabelStyled,
} from './styles';

const Input = ({ label, onChange, value }) => (
  <ContainerStyled>
    <InputStyled onChange={onChange} type="text" value={value} />
    <HighlightStyled />
    <BarStyled />
    <LabelStyled value={value}>{label}</LabelStyled>
  </ContainerStyled>
);
Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
Input.defaultProps = {
  label: '',
  onChange() {},
  value: '',
};

export default Input;
