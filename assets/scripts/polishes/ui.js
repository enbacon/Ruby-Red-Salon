'use strict'

const showPolishesTemplate = require('../templates/polish-listing.handlebars')

const getPolishesSuccess = (data) => {
  console.log(data)
  const showPolishesHtml = showPolishesTemplate({
    polishes: data.polishes,
    title: 'List of Polishes'
  })
  $('.content').html(showPolishesHtml)
}

const clearPolishes = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getPolishesSuccess,
  clearPolishes,
  failure
}
