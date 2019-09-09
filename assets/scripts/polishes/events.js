'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetPolishes = (event) => {
  event.preventDefault()
  api.getPolishes()
    .then(ui.getPolishesSuccess)
    .catch(ui.failure)
}

const onClearPolishes = (event) => {
  event.preventDefault()
  ui.clearPolishes()
}

const onDeletePolish = (event) => {
  const id = $(event.target).data('id')
  api.deletePolish(id)
    .then(function () {
      onGetPolishes(event)
    })
    // .then(onGetPolishes(event)) // bad!!!! will run `onGetPolishes` immediately!
    // will not wait for the API to run!!!! We need the list to be updated before
    // we invoke this function
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getPolishesButton').on('click', onGetPolishes)
  $('#clearPolishesButton').on('click', onClearPolishes)
  $('.content').on('click', '.delete-button', onDeletePolish)
}

module.exports = {
  addHandlers
}
