/* eslint-disable semi */
import { GameObjects } from 'phaser'

class Background extends GameObjects.Image {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key)
  }
}

export default Background
