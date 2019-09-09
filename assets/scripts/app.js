'use strict'

const authEvents = require('./auth/events')
const polishEvents = require('./polishes/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  polishEvents.addHandlers()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#sign-out').hide()
  $('#change-password-button').hide()
  $('.container').hide()
  $('#numGames').hide()
  $('.navbar').hide()
  $('.modal').on('hidden.bs.modal', function () {
    $('form').trigger('reset')
    $('.sign-in-alert').text('')
    $('.change-password-alert').text('')
  })
  $('#add-polish').on('submit', polishEvents.onAddPolish)
  $('.new-polish-container').hide()
})
