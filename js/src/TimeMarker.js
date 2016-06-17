var NamedFunction, TimeMarker, log, setType;

NamedFunction = require("NamedFunction");

setType = require("setType");

log = require("log");

module.exports = TimeMarker = NamedFunction("TimeMarker", function() {
  var self, time;
  time = Date.now();
  self = function(description) {
    var now;
    now = Date.now();
    log.moat(0);
    log.yellow(description, ": ");
    log.yellow.dim(now - time);
    log.moat(0);
    time = now;
  };
  Object.defineProperty(self, "time", {
    get: function() {
      return time;
    }
  });
  return setType(self, TimeMarker);
});

//# sourceMappingURL=../../map/src/TimeMarker.map
