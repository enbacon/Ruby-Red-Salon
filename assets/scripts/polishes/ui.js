'use strict'

// const authUI = require('../auth/ui')
const store = require('../store')
const shared = require('../shared/code')

const showPolishesTemplate = require('../templates/polish-listing.handlebars')

const addPolishSuccess = (data) => {
  store.id = data.nail_polish.id
  shared.setSuccess('Polish created successfully!')
  $('#nail_polish').text(data)
  console.log('createExampleSuccess ran')
}

const addPolishFailure = function () {
  $('add-polish-alert').text('Polish not added.')
}

const updatePolishSuccess = (data) => {
  shared.setSuccess('Polish updated successfully!')
  $('#myModal').modal('show')
  // $('#nail_polish').text(data)
}

const updatePolishFailure = function () {
  $('update-polish-alert').text('Update not successful.')
}

const getPolishesSuccess = (data) => {
  console.log('get polishes ran successfully', data)
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
