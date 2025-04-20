import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

export const addUser = createAction(
  '[Users] Add User',
  props<{ user: User }>()
);
