'use strict'

const authUI = require('../auth/ui')

const showPolishesTemplate = require('../templates/polish-listing.handlebars')

const addPolishSuccess = (data) => {
  authUI.setSuccess('Example created successfully!')
  console.log(data)
  $('#example').text(data.example.text)
  console.log('createExampleSuccess ran')
}

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
  addPolishSuccess,
  getPolishesSuccess,
  clearPolishes,
  failure
}
