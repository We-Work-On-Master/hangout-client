'use strict'
const store = require('./../store')

const onSignUpSuccess = function (data) {
  $('#user-messages').html('Sign-up successful')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (data) {
  $('#user-messages').html('Sign-up failed')
}

const onSignInSuccess = function (data) {
  store.user = data.user

  $('#sign-out').show()
  $('#change-password').show()

  $('#create-event').show()
  $('#update-event').show()
  $('#delete-event').show()
  $('#index-all-events').show()
  $('#show-owned').show()
  $('#sign-in').hide()
  $('#sign-up').hide()

  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#create-event').trigger('reset')

  $('#user-messages').html('Sign-in successful')
}

const onSignInFailure = function (data) {
  $('#user-messages').html('Sign-in failed')
}

const onSignOutSuccess = function (data) {
  store.user = null

  $('#sign-out').hide()
  $('#change-password').hide()

  $('#create-event').hide()
  $('#update-event').hide()
  $('#delete-event').hide()
  $('#index-event').hide()
  $('#index-all-events').hide()
  $('#show-owned').hide()
  $('#sign-in').show()
  $('#sign-up').show()

  $('#change-password').trigger('reset')
  $('#create-event').trigger('reset')

  $('#user-messages').html('Sign-out successful')
}

const onSignOutFailure = function (data) {
  $('#user-messages').html('Sign-out failed')
}

const onChangePasswordSuccess = function (data) {
  $('#change-password').trigger('reset')
  $('#user-messages').html('Password-update successful')
}

const onChangePasswordFailure = function (data) {
  $('#user-messages').html('Password-update failed')
}

const onGetEventsArraySuccess = function (data) {
}

const onGetEventsArrayFailure = function (data) {
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onGetEventsArraySuccess,
  onGetEventsArrayFailure
}
