'use strict'

const user = require('./user/events-user')
const rsvp = require('./rsvp/events-rsvp')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  rsvp.onPageLoad()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-event').hide()
  $('#update-event').hide()
  $('#delete-event').hide()
  $('#index-event').hide()
  $('#show-owned').hide()

  $('#sign-up').on('submit', user.onSignUp)
  $('#sign-in').on('submit', user.onSignIn)
  $('#sign-out').on('submit', user.onSignOut)
  $('#change-password').on('submit', user.onChangePassword)
  $('#get-events-array').on('submit', user.onGetEventsArray)

  $('#create-event').on('submit', rsvp.onEventCreate)
  $('#event-list').on('submit', '.update-event', rsvp.onEventUpdate)

  $('#event-list').on('click', '.delete-event', rsvp.onEventDelete)
  $('#index-event').on('submit', rsvp.onEventIndex)
  $('#index-all-events').on('submit', rsvp.onAllEventIndex)

  $('#event-list').on('click', '.rsvp-event', rsvp.onRsvpEvent)
  $('#event-list').on('click', '.unrsvp-event', rsvp.onUnRsvpEvent)
  $('#show-owned').on('submit', rsvp.showOwned)
})
