'use strict'

const authEvents = require('./auth/events')
const polishEvents = require('./polishes/events')

$(() => {
  polishEvents.addHandlers()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // $('.before-auth').show()
  // $('.after-auth').hide()
  $('#sign-out').hide()
  $('#change-password-button').hide()
  $('.container').hide()
  $('#greeting').hide()
  $('.navbar').hide()
  $('.update-polish-container').hide()
  $('#update-polish').on('submit', polishEvents.onUpdatePolish)
  $('.modal').on('hidden.bs.modal', function () {
    $('form').trigger('reset')
    $('.sign-in-alert').text('')
    $('.change-password-alert').text('')
  })
  $('#add-polish').on('submit', polishEvents.onAddPolish)
  $('.new-polish-container').hide()
  $('.get-clear-container').hide()
})
