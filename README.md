# Angular-Migration

A small Angular 19 app for working through the move from module-based Angular to the modern APIs: standalone
components, signals, built-in control flow and functional providers. The app is a user dashboard: it loads users
from an API, lists them in a table, and adds new ones through a validated form.

## What it covers

| Older pattern | What this project uses instead |
| --- | --- |
| `NgModule` + `AppModule` bootstrap | Standalone components, `bootstrapApplication` with `app.config.ts` |
| `*ngFor` / `*ngIf` | Built-in `@for (…; track …)` and `@if` blocks |
| `BehaviorSubject` for local UI state | `signal()`, `.update()` and read-only signals (`asReadonly()`) |
| `StoreModule.forRoot` / `HttpClientModule` | `provideStore`, `provideEffects`, `provideStoreDevtools`, `provideHttpClient` |
| Template-driven forms | Reactive forms with `FormBuilder` and validators (email, 10-digit phone, required) |

- **`DashboardComponent`** holds the user list in a signal and appends new users with `users.update(...)`.
- **`UiService`** keeps the "add user" panel's open state in a private writable signal and exposes only a
  read-only one.
- **`state/users/`** sets up NgRx 19 with `createAction`, `createReducer` and a `createEffect` that loads users
  through `UserService`.

## Stack

Angular 19.2, NgRx 19 (store, effects, devtools), RxJS 7.8, TypeScript, SCSS. User data comes from
[JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

## Run locally

```sh
npm install
npx ng serve    # http://localhost:4200
npx ng test
```
