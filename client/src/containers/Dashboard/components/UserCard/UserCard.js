import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../../../../components';

import { NameStyled } from './styles';
import face from './icons/face.svg';

const UserCard = ({ user }) => {
  const { lastname, name } = user;

  return (
    <Card>
      <NameStyled>
        <img alt="face" src={face} />
        <span>{`${name} ${lastname || ''}`}</span>
      </NameStyled>
    </Card>
  );
};
UserCard.propTypes = {
  user: PropTypes.shape({
    lastname: PropTypes.string,
    name: PropTypes.string,
  }),
};
UserCard.defaultProps = {
  user: {
    lastname: '',
    name: '',
  },
};

export default UserCard;
