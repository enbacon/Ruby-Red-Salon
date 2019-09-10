'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAddPolish = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addPolish(data)
    .then(ui.addPolishSuccess)
    .then(() => {
      onGetPolishes(event)
      // ui.getPolishesSuccess()
    })
    .catch(ui.addPolishFailure)
}

const onShowUpdateModal = () => {
  const currentPolish = $(event.target)
  const colorID = currentPolish.data('id')
  const brand = currentPolish.data('brand')
  const colorName = currentPolish.data('color-name')
  const color = currentPolish.data('color')
  $('#id').val(colorID)
  $('#brand').val(brand)
  $('#color-name').val(colorName)
  $('#color').val(color)
  $('#update-modal').modal('show')
}

const onUpdatePolish = (event) => {
  event.preventDefault()
  console.log('clicked')
  const data = getFormFields(event.target)
  api.updatePolish(data)
    .then(ui.updatePolishSuccess)
    .then(function () {
      onGetPolishes(event)
      $('#update-modal').modal('hide')
    })
    .catch(ui.updatePolishFailure)
}

const onGetPolishes = (event) => {
  event.preventDefault()
  console.log('get polishes is working')
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
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getPolishesButton').on('click', onGetPolishes)
  $('#clearPolishesButton').on('click', onClearPolishes)
  $('.content').on('click', '.delete-button', onDeletePolish)
  $('.content').on('click', '.update-button', onShowUpdateModal)
  $('#update-polish').on('submit', onUpdatePolish)
  // $('#up')
}

module.exports = {
  addHandlers,
  onAddPolish,
  onUpdatePolish
}
