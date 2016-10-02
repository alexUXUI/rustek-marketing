`use strict`

var animation = {}

animation.blur = () => {
  var blur = () => $('.container').toggleClass('blur')
  return setTimeout(blur, 2000)
}

module.exports = animation
