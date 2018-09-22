import styled from 'styled-components';

export const ContainerStyled = styled.div`
  background: #3f51b5;
  color: #fff;
  display: flex;
  flex-direction: row;
  height: 64px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

export const HeaderStyled = styled.header`
  backface-visibility: hidden;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  display: block;
  left: 0;
  margin-bottom: 40px;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const TitleStyled = styled.h1`
  color: #fefefe;
  flex: 1;
  float: none;
  font-size: 1.3em;
  font-weight: 400;
  line-height: 64px;
  margin: 0 16px;
  max-width: none;
  padding: 0;
`;

export default {
  ContainerStyled,
  HeaderStyled,
  TitleStyled,
};
