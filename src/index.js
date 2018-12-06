/* eslint-disable semi */
import Phaser from 'phaser'
import Preloader from './preloader'
import Game from './game'

const gameConfig = {
  width: 270,
  height: 480,
  parent: 'content',
  backgroundColor: '#f00',
  scene: [
    Preloader,
    Game,
  ],
}
const game = new Phaser.Game(gameConfig)

window.focus()

