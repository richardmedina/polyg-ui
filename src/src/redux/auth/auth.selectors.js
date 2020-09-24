import { createSelector } from 'reselect'

const selectAuth = state => state.authReducer

export const selectIsLoggedIn = createSelector(
  [selectAuth],
  auth => auth.token === ''
)

export const selectIsLoggedInError = createSelector (
  [selectAuth],
  auth => auth.credentials.error !== null
)
