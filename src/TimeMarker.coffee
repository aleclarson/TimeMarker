
NamedFunction = require "NamedFunction"
setType = require "setType"
log = require "log"

module.exports =
TimeMarker = NamedFunction "TimeMarker", ->

  self = (eventName) ->
    now = Date.now()
    log.it eventName + ": " + (now - @_time)
    @_time = now
    return

  Object.defineProperty self, "_time",
    value: Date.now()
    writable: yes

  return setType self, TimeMarker
