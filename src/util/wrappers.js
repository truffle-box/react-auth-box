import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.data,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/', // '/login' by default.
  wrapperDisplayName: 'UserIsAuthenticated'
})

export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/dashboard',
  wrapperDisplayName: 'UserIsNotAuthenticated',
  predicate: user => user.data === null,
  allowRedirectBack: false
})

export const VisibleOnlyAuth = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'VisibleOnlyAuth',
  predicate: user => user.data,
  FailureComponent: null
})

export const HiddenOnlyAuth = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'HiddenOnlyAuth',
  predicate: user => user.data === null,
  FailureComponent: null
})
