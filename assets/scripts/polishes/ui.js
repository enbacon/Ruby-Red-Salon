'use strict'

const authUI = require('../auth/ui')
const store = require('../store')

const showPolishesTemplate = require('../templates/polish-listing.handlebars')

const addPolishSuccess = (data) => {
  store.id = data.nail_polish.id
  authUI.setSuccess('Polish created successfully!')
  console.log(data)
  $('#nail_polish').text(data)
  console.log('createExampleSuccess ran')
}

const addPolishFailure = function () {
  $('add-polish-alert').text('Polish not added.')
}

const updatePolishSuccess = (data) => {
  authUI.setSuccess('Polish updated successfully!')
  console.log(data)
  // $('#nail_polish').text(data)
  console.log('createPolishSuccess ran')
}

const updatePolishFailure = function () {
  $('update-polish-alert').text('Update not successful.')
}

const getPolishesSuccess = (data) => {
  console.log(data)
  const showPolishesHtml = showPolishesTemplate(data)
  $('.content').html(showPolishesHtml)
}

const clearPolishes = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  addPolishSuccess,
  addPolishFailure,
  updatePolishSuccess,
  updatePolishFailure,
  getPolishesSuccess,
  clearPolishes,
  failure
}
