import styled from 'styled-components';

import { THEME } from '../../../../constants';

const { SECONDARY, WHITE } = THEME;

export const ButtonStyled = styled.button`
  background-color: ${SECONDARY};
  border-radius: 100%;
  bottom: 100px;
  color: ${WHITE};
  cursor: pointer;
  font-size: 50px;
  font-weight: 300;
  height: 70px;
  outline: none;
  padding-bottom: 10px;
  position: absolute;
  right: 100px;
  width: 70px;
`;

export default {
  ButtonStyled,
};
