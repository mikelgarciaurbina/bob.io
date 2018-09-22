import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonStyled } from './styles';

const UserCard = () => (
  <Link to="/new">
    <ButtonStyled>+</ButtonStyled>
  </Link>
);

export default UserCard;
