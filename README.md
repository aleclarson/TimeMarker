
# TimeMarker 1.0.0 ![experimental](https://img.shields.io/badge/stability-experimental-EC5315.svg?style=flat)

```coffee
TimeMarker = require "TimeMarker"

mark = TimeMarker()

mark "foo"  # prints -> "foo: 0"

setTimeout (-> mark "bar"), 1000 # prints -> "bar: 1000"
```
