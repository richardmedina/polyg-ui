import { createSelector } from 'reselect'

const selectAuth = state => state.authReducer

export const selectIsLoginLoading = createSelector(
  [selectAuth],
  auth => auth.credentials.loading === true
)
export const selectIsLoggedIn = createSelector(
  [selectAuth],
  auth => auth.credentials.token !== ''
)

export const selectIsLoggedInError = createSelector (
  [selectAuth],
  auth => auth.credentials.error !== null
)
