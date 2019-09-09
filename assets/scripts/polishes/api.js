'use strict'

const config = require('../config')

const getPolishes = function () {
  return $.ajax({
    url: config.apiUrl + '/nail-polishes'
  })
}

const deletePolish = function (id) {
  return $.ajax({
    url: config.apiUrl + '/nail-polishes/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  getPolishes,
  deletePolish
}
