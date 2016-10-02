/*
 * This file imports the logic from
 * the other modules and invokes it.
*/

`use strict`

import rustek from './rustek'
import animation from './animations'

function *playWebsite() {
  yield setTimeout(animation.addDroppingSoon, 2000)
  yield setTimeout(animation.blur, 2000)
  yield setTimeout(animation.blur, 4000)
  yield setTimeout(animation.addSocialMedia, 4400)
}

const player = playWebsite()

for(let playerFunction of player) {
   player.next()
 }
