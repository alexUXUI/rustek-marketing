/*
 * This file imports the logic from
 * the other modules and invokes it.
*/

`use strict`

import rustek from './rustek'
import animation from './animations'
import social from './social'

// function *playWebsite() {
//   yield setTimeout(animation.addDroppingSoon, 2000)
//   yield setTimeout(animation.blur, 2000)
//   yield setTimeout(animation.blur, 4000)
//   yield setTimeout(animation.addSocialMedia, 5000)
//   yield setTimeout(animation.addSignUp, 4600)
//   yield setTimeout(rustek.init, 4600)
// }

function *playWebsite() {
  yield setTimeout(animation.addDroppingSoon, 0)
  yield setTimeout(animation.blur, 0)
  yield setTimeout(animation.blur, 0)
  yield setTimeout(animation.addSocialMedia, 0)
  yield setTimeout(animation.addSignUp, 0)
  yield setTimeout(rustek.init, 0)
}

const player = playWebsite()

for(let playerFunction of player) {
   player.next()
 }


// invoke social
// social.igHover()
