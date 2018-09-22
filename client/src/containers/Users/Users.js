import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions/Users';

import { Container, NewButton, UserCard } from './components';

class Users extends React.Component {
  componentDidMount() {
    const { itemsFetchData } = this.props;

    itemsFetchData();
  }

  render() {
    const { users } = this.props;

    return (
      <Fragment>
        <Container>{users.data.map(user => <UserCard key={user._id} user={user} />)}</Container>
        <NewButton />
      </Fragment>
    );
  }
}
Users.propTypes = {
  itemsFetchData: PropTypes.func,
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    error: PropTypes.string,
    loading: PropTypes.bool,
  }),
};
Users.defaultProps = {
  itemsFetchData() {},
  users: {},
};

const mapStateToProps = ({ users }) => ({
  users,
});
const mapDispatchToProps = dispatch => ({
  itemsFetchData: () => dispatch(actions.itemsFetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
