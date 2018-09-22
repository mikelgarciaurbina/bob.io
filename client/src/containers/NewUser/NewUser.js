import React from 'react';

import { Input } from '../../components';

import { Container, Title } from './components';

const NewUser = () => (
  <Container>
    <Title>New User</Title>
    <Input label="Name" />
    <Input label="Lastname" />
  </Container>
);

export default NewUser;
