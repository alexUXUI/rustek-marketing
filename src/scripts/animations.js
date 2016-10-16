`use strict`

var animation = {

  fade: () => {
    $('.faded').fadeOut(3000)
  },

  blur: () => {
    return $('.bg').toggleClass('blur')
  },

  addSocialMedia: () => {
    return $('.social-media').toggleClass('hidden')
  },

  addRustek: () => {
    return $('.logo').toggleClass('hidden')
  },

  addDroppingSoon: () => {
    return $('.dropping-soon').toggleClass('hidden')
  },

  addSignUp: () => {
    return $('.email-sign-up').toggleClass('hidden')
  }

}

module.exports = animation
