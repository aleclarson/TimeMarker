var NamedFunction, TimeMarker, log, setType;

NamedFunction = require("NamedFunction");

setType = require("setType");

log = require("log");

module.exports = TimeMarker = NamedFunction("TimeMarker", function() {
  var self;
  self = function(eventName) {
    var now;
    now = Date.now();
    log.it(eventName + ": " + (now - this._time));
    this._time = now;
  };
  Object.defineProperty(self, "_time", {
    value: Date.now(),
    writable: true
  });
  return setType(self, TimeMarker);
});

//# sourceMappingURL=../../map/src/TimeMarker.map
