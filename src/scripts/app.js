/*
 * This file imports the logic from
 * the other modules and invokes it.
*/

`use strict`

import rustek from './rustek'
import animation from './animations'

(() => {
  animation.blur()
  rustek.init()
  animation.addSocialMedia()
})()
