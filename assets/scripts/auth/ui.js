'use strict'
const store = require('./../store')

const setFailure = function (text) {
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#message').text(text)
}

const setSuccess = function (text) {
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').text(text)
}

// does this need anything passed in?/ as a parameter
// TODO this onlyl works for signIn to store the Token
// need to think about signUp, etc...  (if I have refactored my code so the below is only 1 success function)
const signUpSuccess = function () {
  // store.token = data.user.token
  setSuccess('Signed up successfully!')
  $('form').trigger('reset')
  console.log('singUpSuccess ran')
}

const signUpFailure = function () {
  setFailure('Sign up was not successful.')
  $('form').trigger('reset')
  console.log('signUpFailure ran')
}

const signInSuccess = function (data) {
  // handle storing user token, if it exits
  // data looks like
  // {"user":{"id":109,"email":"bob@gmail.com","token":"BAhJIiVlNWM4NjM3YjMxYzE2Mjc3MDBhMTM2OWQ2YjhhNTdmZAY6BkVG--3519ca18cb78a9b82d5f6e7ffb08f5f06555aafe"}}

  // if wanted to store email
  // store.email = data.user.email
  // right below is how we are storing the user's token
  // store.user.token is how you get the user out of here
  store.user = data.user
  setSuccess('Signed in successfully!')
  console.log('Successful sign in! User is', store.user)
  $('#signed-in-user').text(store.user.email)
  $('#change-password-button').show()
  $('#sign-up').hide()
  $('#sign-in-modal').modal('hide')
  $('#new-game').show()
  $('#sign-out').show()
  $('#numGames').show()
  $('.navbar').show()
  $('#hide').css('display', 'block')
  $('.sign-in-alert').text('')
  $('#credentials').hide()
  $('form').trigger('reset')
}

const signInFailure = function () {
  setFailure('Sign in was not successful.')
  $('form').trigger('reset')
  console.log('signInFailure ran')
}
const changePasswordSuccess = function () {
  setSuccess('Password changed successfully!')
  $('#change-password-modal').modal('hide')
  $('form').trigger('reset')
  console.log('changePasswordSuccess ran')
}

const changePasswordFailure = function () {
  setFailure('Password was not changed succesfully.')
  $('form').trigger('reset')
  console.log('changePasswordFailure ran')
}

const signOutSuccess = function () {
  // handle storing user token, if it exits
  // data looks like
  // {"user":{"id":109,"email":"bob@gmail.com","token":"BAhJIiVlNWM4NjM3YjMxYzE2Mjc3MDBhMTM2OWQ2YjhhNTdmZAY6BkVG--3519ca18cb78a9b82d5f6e7ffb08f5f06555aafe"}}
  // could also set to store.user = null
  store.user = {}
  $('#signed-in-user').text('')
  setSuccess('Signed out successfully!')
  // $('#message').className('success') // better?
  $('#change-password-button').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.container').hide()
  $('#new-game').hide()
  $('#numGames').hide()
  $('#games-message').hide()
  $('.navbar').hide()
  $('#credentials').show()
  $('form').trigger('reset')
  console.log('Signed out successfully')
}

const signOutFailure = function () {
  setFailure('Sign out was not successful.')
  $('form').trigger('reset')
  console.log('signOutFailure ran')
}

const createExampleSuccess = function (data) {
  setSuccess('Example created successfully!')
  console.log(data)
  $('#example').text(data.example.text)
  console.log('createExampleSuccess ran')
}

const createExampleFailure = function () {
  setFailure('Example not created!')
  $('form').trigger('reset')

  console.log('createExampleFailure ran')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createExampleSuccess,
  createExampleFailure
}
