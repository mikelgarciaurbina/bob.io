import { ServiceUsers } from '../services';

export const USERS_FAILURE = 'USERS_FAILURE';
export const USERS_STARTED = 'USERS_STARTED';
export const USERS_SUCCESS = 'USERS_SUCCESS';

export const usersFailure = error => ({
  type: USERS_FAILURE,
  error,
});

export const usersStarted = {
  type: USERS_STARTED,
};

export const usersSuccess = data => ({
  type: USERS_SUCCESS,
  data,
});

export const itemsFetchData = () => async (dispatch) => {
  dispatch(usersStarted);
  try {
    const { data } = await ServiceUsers.getAll();
    dispatch(usersSuccess(data));
  } catch (e) {
    dispatch(usersFailure(e));
  }
};
