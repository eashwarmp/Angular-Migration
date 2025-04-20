import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from './users.actions';
import { UserService } from '../../core/user.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError(() => of({ type: '[Users] Load Failed' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
