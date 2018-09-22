import React from 'react';

import { ContainerStyled, FooterStyled, LinkStyled } from './styles';

const Footer = () => (
  <FooterStyled>
    <ContainerStyled>
      <p>
        &copy;
        {' '}
        {1900 + new Date().getYear()}
        {' '}
        <LinkStyled href="https://bob.io/">Bob.io</LinkStyled>
        , made with love for a better web
      </p>
    </ContainerStyled>
  </FooterStyled>
);

export default Footer;
