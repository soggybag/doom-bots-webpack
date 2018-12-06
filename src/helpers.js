/* eslint-disable semi */
// import game from './game'

// window.onresize = (e) => {
//   game.renderer.resize(window.innerWidth, window.innerHeight)
//   game.events.emit('resize')
// }

// import Phaser from 'phaser'

// const resize = (game) => {
//   const canvas = document.querySelector('canvas')
//   const windowWidth = window.innerWidth
//   const windowHeight = window.innerHeight
//   const windowRatio = windowWidth / windowHeight
//   const gameRatio = game.config.width / game.config.height

//   if (windowRatio < gameRatio) {
//     canvas.style.width = `${windowWidth}px`
//     canvas.style.height = `${(windowWidth / gameRatio)}px`
//   } else {
//     canvas.style.width = `${(windowHeight * gameRatio)}px`
//     canvas.style.height = `${windowHeight}px`
//   }

//   // TODO: Fix cam
//   this.cameraRect.x = cam.x
//   this.cameraRect.y = cam.y
//   this.cameraRect.width = cam.width / cam.zoom
//   this.cameraRect.height = cam.height / cam.zoom

//   Phaser.Display.Align.In.TopCenter(this.topSpikes, this.cameraRect)
//   Phaser.Display.Align.In.BottomCenter(this.bottomSpikes, this.cameraRect)
// }
