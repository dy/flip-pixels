'use strict'

var flip = require('./')
var a = require('assert')

a.deepEqual(flip([0,1,1,0], 2, 2), [1,0,0,1])

var x = [0,1,1,0]
a.equal(flip(x, 2, 2), x)
