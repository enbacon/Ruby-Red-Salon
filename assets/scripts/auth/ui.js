'use strict'
const store = require('./../store')
const shared = require('../shared/code')

// const setFailure = function (text) {
//   $('#message').removeClass('success')
//   $('#message').addClass('failure')
//   $('#message').text(text)
// }
//
// const setSuccess = function (text) {
//   $('#message').removeClass('failure')
//   $('#message').addClass('success')
//   $('#message').text(text)
// }

const signUpSuccess = function () {
  // store.token = data.user.token
  shared.setSuccess('Signed up successfully!')
  $('#sign-up').hide()
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('.sign-up-alert').text('Sign up was not successful')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  shared.setSuccess('Signed in successfully!')
  $('#signed-in-user').text(store.user.email)
  $('.before-auth').hide()
  $('.after-auth').show()
  $('#change-password-button').show()
  // $('#sign-up').hide()
  $('#sign-in-modal').modal('hide')
  // $('.new-polish-container').show()
  $('#sign-out').show()
  $('.navbar').show()
  // $('.get-clear-container').show()
  $('#hide').css('display', 'block')
  // $('.sign-in-alert').text('')
  $('#credentials').hide()
  // $('#greeting').show()
  // $('.update-polish-container').show()
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('.sign-in-alert').text('Sign in was not successful')
  $('.sign-up-alert').text('')
  $('form').trigger('reset')
  console.log('signInFailure ran')
}
const changePasswordSuccess = function () {
  shared.setSuccess('Password changed successfully!')
  $('#change-password-modal').modal('hide')
  $('.change-password-alert').text('')
  $('form').trigger('reset')
  console.log('changePasswordSuccess ran')
}

const changePasswordFailure = function () {
  $('.change-password-alert').text('Password was not changed succesfully.')
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
  shared.setSuccess('Signed out successfully!')
  // $('#message').className('success') // better?
  $('.before-auth').hide()
  $('.after-auth').show()
  // $('#change-password-button').hide()
  // $('#sign-in').show()
  // $('#sign-up').show()
  // $('#sign-out').hide()
  $('.container').hide()
  // $('#games-message').hide()
  // $('.navbar').hide()
  // $('.new-polish-container').hide()
  // $('#credentials').show()
  // $('.new-polish-container').hide()
  $('form').trigger('reset')
  console.log('Signed out successfully')
}

const signOutFailure = function () {
  shared.setFailure('Sign out was not successful.')
  $('form').trigger('reset')
  console.log('signOutFailure ran')
}

const createExampleSuccess = function (data) {
  shared.setSuccess('Example created successfully!')
  console.log(data)
  $('#example').text(data.example.text)
  console.log('createExampleSuccess ran')
}

const createExampleFailure = function () {
  shared.setFailure('Example not created!')
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
