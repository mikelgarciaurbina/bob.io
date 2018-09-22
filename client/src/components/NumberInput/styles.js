import styled from 'styled-components';

import { THEME } from '../../constants';

const { GRAY, SECONDARY } = THEME;

export const ButtonStyled = styled.button`
  background-color: white;
  border: 1px solid;
  border-radius: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: 200;
  height: 30px;
  padding-bottom: 2px;
  padding-left: 8px;
  width: 30px;

  &:focus {
    outline: none;
  }
`;

export const ContainerStyled = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 20px;
  position: relative;
  width: 100%;
`;

export const InputStyled = styled.input`
  border: none;
  border-bottom: 1px solid #757575;
  box-sizing: border-box;
  color: ${GRAY};
  display: block;
  font-size: 18px;
  text-align: center;
  width: 100px;

  &:focus {
    outline: none;
  }
`;

export const InputContainerStyled = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const LabelStyled = styled.label`
  color: ${SECONDARY};
  font-size: 14px;
  font-weight: normal;
  left: 5px;
  pointer-events: none;
  position: absolute;
  top: -20px;
`;

export default {
  ButtonStyled,
  ContainerStyled,
  InputStyled,
  InputContainerStyled,
  LabelStyled,
};
