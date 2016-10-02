`use strict`

var animation = {}

animation.blur = () => {
  var blur = () => $('.container').toggleClass('blur')
  return setTimeout(blur, 2000)
}

animation.addSocialMedia = () => {
  $('.fb').toggleClass('hidden')
  $('.instagram').toggleClass('hidden')
}

module.exports = animation
