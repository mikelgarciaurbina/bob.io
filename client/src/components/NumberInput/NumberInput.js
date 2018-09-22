import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonStyled,
  ContainerStyled,
  InputStyled,
  InputContainerStyled,
  LabelStyled,
} from './styles';

function handleOnAdd(onChange, value) {
  return () => {
    if (value < 5) onChange({ target: { value: value + 1 } });
  };
}

function handleOnSubtract(onChange, value) {
  return () => {
    if (value > 0) onChange({ target: { value: value - 1 } });
  };
}

const NumberInput = ({ label, onChange, value }) => (
  <ContainerStyled>
    <LabelStyled>{label}</LabelStyled>
    <InputContainerStyled>
      <ButtonStyled onClick={handleOnSubtract(onChange, value)}>-</ButtonStyled>
      <InputStyled type="number" value={value} disabled />
      <ButtonStyled onClick={handleOnAdd(onChange, value)}>+</ButtonStyled>
    </InputContainerStyled>
  </ContainerStyled>
);
NumberInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number,
};
NumberInput.defaultProps = {
  label: '',
  onChange() {},
  value: 0,
};

export default NumberInput;
