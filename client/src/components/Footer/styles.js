import styled from 'styled-components';

import { THEME } from '../../constants';

const { PRIMARY } = THEME;

export const ContainerStyled = styled.div`
  padding-right: 15px;
  position: relative;
`;

export const FooterStyled = styled.footer`
  bottom: 0;
  font-size: 14px;
  font-weight: 300px;
  padding: 15px;
  position: absolute;
  right: 0;
`;

export const LinkStyled = styled.a`
  color: ${PRIMARY};
  text-decoration: none;
`;

export default {
  ContainerStyled,
  FooterStyled,
};
