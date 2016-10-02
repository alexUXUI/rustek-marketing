`use strict`

var rustek = require('./rustek')
var animation = require('./animations')

var app = {}

app.init = function(){
  return console.log('sup world from app')
}

app.init()
rustek.init()
animation.init()

module.exports = app
