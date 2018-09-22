import styled from 'styled-components';

import { THEME } from '../../constants';

const { GRAY, WHITE } = THEME;

export const CardStyled = styled.div`
  background: ${WHITE};
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: ${GRAY};
  flex-grow: 1;
  margin: 1rem;
  width: 30%;
`;

export default {
  CardStyled,
};
