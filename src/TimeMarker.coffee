
NamedFunction = require "NamedFunction"
setType = require "setType"
log = require "log"

module.exports =
TimeMarker = NamedFunction "TimeMarker", ->

  time = Date.now()

  self = (description) ->
    now = Date.now()
    log.moat 0
    log.yellow description, ": "
    log.yellow.dim now - time
    log.moat 0
    time = now
    return

  Object.defineProperty self, "time", get: -> time

  return setType self, TimeMarker
