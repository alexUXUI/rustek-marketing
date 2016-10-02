`use strict`

var animation = {}

animation.blur = () => {
  return $('.container').toggleClass('blur')
}

animation.addSocialMedia = () => {
  return $('.social-media').toggleClass('hidden')
}

animation.addDroppingSoon = () => {
  return $('.dropping-soon').toggleClass('hidden')
}

module.exports = animation
