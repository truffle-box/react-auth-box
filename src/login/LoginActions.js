import { uport, web3 } from './../util/connectors.js'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser() {
  return function(dispatch) {
    web3.eth.getCoinbase(function (err, address) {
      if (err) { throw err }
      web3.eth.defaultAccount = address

      uport.getUserPersona().then((userPersona) => {
        return dispatch(userLoggedIn(userPersona.profile))
      })
    })
  }
}
