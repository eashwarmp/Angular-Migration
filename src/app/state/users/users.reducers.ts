import { createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user';
import * as UserActions from './users.actions';

export interface UsersState {
  users: User[];
}

export const initialState: UsersState = {
  users: [],
};

export const usersReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  }))
);
