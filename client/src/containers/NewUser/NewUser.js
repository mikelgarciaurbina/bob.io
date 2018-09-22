import React from 'react';

import { Input, NumberInput } from '../../components';

import { Container, Title } from './components';

class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bags: 0, lastname: 'a', name: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return ({ target }) => {
      this.setState({ [name]: target.value });
    };
  }

  render() {
    const { bags, lastname, name } = this.state;

    return (
      <Container>
        <Title>New User</Title>
        <Input label="Name" onChange={this.handleChange('name')} value={name} />
        <Input label="Lastname" onChange={this.handleChange('lastname')} value={lastname} />
        <NumberInput label="Bags" onChange={this.handleChange('bags')} value={bags} />
      </Container>
    );
  }
}

export default NewUser;
