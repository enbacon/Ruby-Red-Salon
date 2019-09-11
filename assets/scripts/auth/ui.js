'use strict'
const store = require('./../store')
const shared = require('../shared/code')

const signUpSuccess = function () {
  $('.sign-up-alert').text('Signed up successfully!')
  $('#sign-up').hide()
  $('.sign-up-alert').text('')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  console.log('signupfailure')
  $('.sign-up-alert').text('Sign up was not successful')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#signed-in-user').text(store.user.email)
  $('.before-auth').hide()
  $('.after-auth').show()
  $('#change-password-button').show()
  $('#sign-in-modal').modal('hide')
  $('#sign-out').show()
  $('#hide').css('display', 'block')
  $('form').trigger('reset')
  $('.sign-up-alert').text('')
  // $('.get-clear-container').show()
  // $('.navbar').show()
  // $('.new-polish-container').show()
  // $('#sign-up').hide()
  // $('.sign-in-alert').text('')
  // $('#credentials').hide()
  // $('#greeting').show()
  // $('.update-polish-container').show()
}

const signInFailure = function () {
  $('.sign-in-alert').text('Sign in was not successful')
  $('.sign-up-alert').text('')
  $('form').trigger('reset')
}
const changePasswordSuccess = function () {
  // shared.setSuccess('Password changed successfully!')
  $('#change-password-modal').modal('hide')
  $('.change-password-alert').text('')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('.change-password-alert').text('Password was not changed succesfully.')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  // handle storing user token, if it exits
  // data looks like
  // {"user":{"id":109,"email":"bob@gmail.com","token":"BAhJIiVlNWM4NjM3YjMxYzE2Mjc3MDBhMTM2OWQ2YjhhNTdmZAY6BkVG--3519ca18cb78a9b82d5f6e7ffb08f5f06555aafe"}}
  // could also set to store.user = null
  store.user = {}
  $('#signed-in-user').text('')
  // shared.setSuccess('Signed out successfully!')
  // $('#message').className('success') // better?
  $('.before-auth').show()
  $('.after-auth').hide()
  $('#change-password-button').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.container').hide()
  // $('#games-message').hide()
  $('.navbar').hide()
  $('.new-polish-container').hide()
  $('#credentials').show()
  $('.new-polish-container').hide()
  $('form').trigger('reset')
}

const signOutFailure = function () {
  shared.setFailure('Sign out was not successful.')
  $('.change-password-alert').text('')
  $('form').trigger('reset')
  console.log('sign out failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
