import React, { createContext } from 'react';
import { useReducer } from 'react';
import UserReducer from './UserReducer';
import { userActionTypes } from './userActionTypes';

const initialState = {
  users: [],
  loggedIn: false
};

export const UserStateContext = createContext();
export const UserDispatchContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  
  function addUser(user) {
    dispatch({
      type: userActionTypes.ADD_USER,
      payload: user
    });
  }

  const deleteUser = (user) => {
    dispatch({
      type: userActionTypes.DELETE_USER,
      payload: user
    });
  }

  const userActions = {
    addUser,
    deleteUser
  }
  
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={userActions}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};
