`use strict`

var animations = require('./animations')

var rustek = {}

rustek.init = function(){
  console.log('sup world from rustek');
}

rustek.init()
animations.init()

module.exports = rustek
