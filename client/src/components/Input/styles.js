import styled, { css } from 'styled-components';

import { THEME } from '../../constants';

const { GRAY, SECONDARY } = THEME;

export const BarStyled = styled.span`
  display: block;
  position: relative;
  width: 300px;

  &:before,
  &:after {
    background: ${SECONDARY};
    bottom: 0;
    content: '';
    height: 2px;
    position: absolute;
    transition: 0.2s ease all;
    width: 0;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
  input:focus ~ &:before,
  input:focus ~ &:after {
    width: 50%;
  }
`;

export const ContainerStyled = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 20px;
  position: relative;
  width: 100%;
`;

export const HighlightStyled = styled.span`
  height: 60%;
  left: 0;
  opacity: 0.5;
  pointer-events: none;
  position: absolute;
  top: 25%;
  width: 100px;
`;

export const InputStyled = styled.input`
  border: none;
  border-bottom: 1px solid #757575;
  box-sizing: border-box;
  color: ${GRAY};
  display: block;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  width: 300px;

  &:focus {
    outline: none;
  }
  &:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: ${SECONDARY};
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;

const labelActive = css`
  color: ${SECONDARY};
  font-size: 14px;
  top: -20px;
`;

export const LabelStyled = styled.label`
  color: ${GRAY};
  font-size: 18px;
  font-weight: normal;
  left: 5px;
  pointer-events: none;
  position: absolute;
  top: 10px;
  transition: 0.2s ease all;

  ${({ value }) => !!value
    && labelActive};

  input:focus ~ & {
    ${labelActive}
  }
`;

export default {
  BarStyled,
  ContainerStyled,
  HighlightStyled,
  InputStyled,
  LabelStyled,
};
