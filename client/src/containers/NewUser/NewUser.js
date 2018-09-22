import React from 'react';

import { Input } from '../../components';

import { Container, Title } from './components';

class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lastname: 'a', name: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return ({ target }) => {
      this.setState({ [name]: target.value });
    };
  }

  render() {
    const { lastname, name } = this.state;

    return (
      <Container>
        <Title>New User</Title>
        <Input label="Name" onChange={this.handleChange('name')} value={name} />
        <Input label="Lastname" onChange={this.handleChange('lastname')} value={lastname} />
      </Container>
    );
  }
}

export default NewUser;
