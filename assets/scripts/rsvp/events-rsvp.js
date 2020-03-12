'user strict'

const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')
const api = require('./api-rsvp')
const ui = require('./ui-rsvp')

const updateHandlebars = function () {
  api.eventIndex()
    .then(ui.onUpdateHandlebarsSuccess)
    .catch(ui.onUpdateHandlebarsFailure)
}

const onEventCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.eventCreate(data)
    .then(ui.onEventCreateSuccess)
    .then(updateHandlebars)
    .catch(ui.onEventCreateFailure)
}
const onEventUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.eventUpdate(data)
    .then(ui.onEventUpdateSuccess)
    .then(updateHandlebars)
    .catch(ui.onEventUpdateFailure)
}

const onEventDelete = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.eventDelete(data)
    .then(ui.onEventDeleteSuccess)
    .then(updateHandlebars)
    .catch(ui.onEventDeleteFailure)
}

const onEventIndex = function (event) {
  event.preventDefault()

  // const form = event.target
  // const data = getFormFields(form)

  api.eventIndex()
    .then(ui.onEventIndexSuccess)
    .catch(ui.onEventIndexFailure)
}

const onAllEventIndex = function (event) {
  event.preventDefault()

  // const form = event.target
  // const data = getFormFields(form)

  api.allEventIndex()
    .then(ui.onAllEventIndexSuccess)
    .catch(ui.onAllEventIndexFailure)
}

const onRsvpEvent = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.rsvpEvent(data)
    .then(ui.onRsvpEventSuccess)
    .catch(ui.onRsvpEventFailure)

  // api.rsvpUser(data)
  //   .then(ui.onRsvpUserSuccess)
  //   .catch(ui.onRsvpUserFailure)
}

const onUnRsvpEvent = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.unRsvpEvent(data)
    .then(ui.onUnRsvpEventSuccess)
    .catch(ui.onUnRsvpEventFailure)

  api.unRsvpUser(data)
    .then(ui.onUnRsvpUserSuccess)
    .catch(ui.onUnRsvpUserFailure)
}


module.exports = {
  onEventCreate,
  onEventUpdate,
  onEventDelete,
  onEventIndex,
  onAllEventIndex,
  onRsvpEvent,
  onUnRsvpEvent
}
