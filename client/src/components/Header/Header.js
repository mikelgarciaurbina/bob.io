import React from 'react';

import {
  ContainerStyled, HeaderStyled, ImgStyled, TitleStyled,
} from './styles';
import logo from './bob.jpeg';

const Header = () => (
  <HeaderStyled>
    <ContainerStyled>
      <ImgStyled alt="logo" src={logo} />
      <TitleStyled>Dashboard</TitleStyled>
    </ContainerStyled>
  </HeaderStyled>
);

export default Header;
