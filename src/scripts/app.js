/*
 * This file imports the logic from
 * the other modules and invokes it.
*/

`use strict`

import rustek from './rustek'
import animation from './animations'
import social from './social'

function *playWebsite() {
  yield setTimeout(animation.fade, 1000)
  yield setTimeout(animation.addRustek, 500)
  yield setTimeout(animation.addDroppingSoon, 1500)
  yield setTimeout(animation.blur, 4500)
  yield setTimeout(animation.addSocialMedia, 5500)
  yield setTimeout(animation.addSignUp, 5100)
  yield setTimeout(rustek.init, 5100)
}

// function *playWebsite() {
//   yield setTimeout(animation.addDroppingSoon, 0)
//   yield setTimeout(animation.blur, 0)
//   yield setTimeout(animation.blur, 0)
//   yield setTimeout(animation.addSocialMedia, 0)
//   yield setTimeout(animation.addSignUp, 0)
//   yield setTimeout(rustek.init, 0)
// }

const player = playWebsite()

for(let playerFunction of player) {
   player.next()
 }
