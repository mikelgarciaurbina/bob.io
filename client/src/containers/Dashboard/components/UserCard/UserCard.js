import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../../../../components';

import { TextStyled } from './styles';
import bag from './icons/bag.svg';
import face from './icons/face.svg';
import phone from './icons/phone.svg';

const UserCard = ({ user }) => {
  const {
    bags, lastname, name, mobileNumber,
  } = user;

  return (
    <Card>
      <TextStyled>
        <img alt="face" src={face} />
        <span>{`${name} ${lastname || ''}`}</span>
      </TextStyled>
      <TextStyled>
        <img alt="bag" src={bag} />
        <span>{bags}</span>
      </TextStyled>
      {!!mobileNumber && (
        <TextStyled>
          <img alt="phone" src={phone} />
          <span>{mobileNumber}</span>
        </TextStyled>
      )}
    </Card>
  );
};
UserCard.propTypes = {
  user: PropTypes.shape({
    bags: PropTypes.number,
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
