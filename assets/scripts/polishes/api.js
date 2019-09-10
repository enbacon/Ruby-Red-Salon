'use strict'

const config = require('../config')
const store = require('./../store')

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

module.exports = {
  addPolish,
  getPolishes,
  deletePolish
}
