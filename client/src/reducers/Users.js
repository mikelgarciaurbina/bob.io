import { USERS_FAILURE, USERS_STARTED, USERS_SUCCESS } from '../actions/Users';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.toString(),
      };
    case USERS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...action.data],
      };
    default:
      return state;
  }
}
