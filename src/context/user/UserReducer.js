import { userActionTypes } from './userActionTypes';

export default (state, action) => {
  switch (action.type) {
    case userActionTypes.ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users]
      };

    default:
      return state;
  }
};
