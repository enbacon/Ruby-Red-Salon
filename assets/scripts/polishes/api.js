'use strict'

const config = require('../config')
const store = require('./../store')

const addPolish = function (data) {
  return $.ajax({
    url: config.apiUrl + '/nail_polishes/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePolish = function (data) {
  return $.ajax({
    url: config.apiUrl + '/nail_polishes/' + data.nail_polish.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getPolishes = function () {
  return $.ajax({
    url: config.apiUrl + '/nail_polishes'
  })
}

const deletePolish = function (id) {
  return $.ajax({
    url: config.apiUrl + '/nail_polishes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addPolish,
  updatePolish,
  getPolishes,
  deletePolish
}
