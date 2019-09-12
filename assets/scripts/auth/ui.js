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
}

const signInFailure = function () {
  $('.sign-in-alert').text('Sign in was not successful')
  $('.sign-up-alert').text('')
  $('form').trigger('reset')
}
const changePasswordSuccess = function () {
  $('#change-password-modal').modal('hide')
  $('.change-password-alert').text('')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('.change-password-alert').text('Password was not changed succesfully.')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = {}
  $('#signed-in-user').text('')
  $('.before-auth').show()
  $('.after-auth').hide()
  $('#change-password-button').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.container').hide()
  $('.navbar').hide()
  $('.new-polish-container').hide()
  $('#credentials').show()
  $('.new-polish-container').hide()
  $('.content').empty()
  $('form').trigger('reset')
}

const signOutFailure = function () {
  shared.setFailure('Sign out was not successful.')
  $('.change-password-alert').text('')
  $('form').trigger('reset')
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
