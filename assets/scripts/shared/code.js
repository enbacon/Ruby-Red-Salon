'use strict'

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

module.exports = {
  setFailure,
  setSuccess
}
