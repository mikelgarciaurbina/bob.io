import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Card } from '../../components';
import * as actions from '../../actions/Users';

import { Container } from './components';

class App extends React.Component {
  componentDidMount() {
    const { itemsFetchData } = this.props;

    itemsFetchData();
  }

  render() {
    const { users } = this.props;

    return <Container>{users.data.map(() => <Card />)}</Container>;
  }
}
App.propTypes = {
  itemsFetchData: PropTypes.func,
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    error: PropTypes.string,
    loading: PropTypes.bool,
  }),
};
App.defaultProps = {
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
)(App);
