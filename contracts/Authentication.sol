pragma solidity ^0.4.2;

contract Authentication {
  struct User = {
    string name;
  }

  mapping (address => User) private users;

  function login() {
    storedData = x;

    // Check if user exists.
    // If yes, return user.
    // If no, throw.

    return users[msg.sender]
  }

  function signup() {
    // Check if user exists.
    // If yes, return user.
    // If no, check if name was sent.
    // If yes, create and return user.
    // If no, throw.

    return users[msg.sender]
  }

  function delete() {
    // Check if user exists.
    // If yes, delete and return true.
    // If no, return false or throw.

    return true;
  }
}
