import Web3 from 'web3'
import AuthenticationContract from '../../build/contracts/Authentication.json'

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
const web3 = new Web3(provider)
const contract = require('truffle-contract')

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser() {
  return function(dispatch) {
    // Using truffle-contract we create the authentication object.
    const authentication = contract(AuthenticationContract)
    authentication.setProvider(provider)

    // Declaring this for later so we can chain functions on Authentication.
    var authenticationInstance

    web3.eth.getAccounts(function(error, accounts) {
      console.log(accounts)

      authentication.deployed().then(function(instance) {
        authenticationInstance = instance

        // Attempt to login user.
        authenticationInstance.login({from: accounts[0]})
        .catch(function(result) {
          // If error, go to signup page.
          console.log('Wallet ' + accounts[0] + ' does not have an account!')

          window.location.href = window.location.protocol + '/signup'
        })
      }).then(function(result) {
        // If error, go to signup page.
        return console.log(result)
      })
    })
  }
}
