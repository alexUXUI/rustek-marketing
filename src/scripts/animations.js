`use strict`

var animation = {
  blur: () => {
    return $('.bg').toggleClass('blur')
  },

  addSocialMedia: () => {
    return $('.social-media').toggleClass('hidden')
  },

  addDroppingSoon: () => {
    return $('.dropping-soon').toggleClass('hidden')
  },

  addSignUp: () => {
    return $('.email-sign-up').toggleClass('hidden')
  }
}

module.exports = animation
