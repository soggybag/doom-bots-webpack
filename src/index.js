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
        Game
    ]
}

const game = new Phaser.Game(gameConfig);
window.focus();

function resize() {
	let canvas = document.querySelector("canvas");
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;
	let windowRatio = windowWidth / windowHeight;
	let gameRatio = game.config.width / game.config.height;
	if (windowRatio < gameRatio) {
		canvas.style.width = windowWidth + "px";
		canvas.style.height = (windowWidth / gameRatio) + "px";
	} else {
		canvas.style.width = (windowHeight * gameRatio) + "px";
		canvas.style.height = windowHeight + "px";
	}

	this.cameraRect.x = cam.x
	this.cameraRect.y = cam.y
	this.cameraRect.width = cam.width / cam.zoom
	this.cameraRect.height = cam.height / cam.zoom

	phaser.Display.Align.In.TopCenter(this.topSpikes, this.cameraRect)
	phaser.Display.Align.In.BottomCenter(this.bottomSpikes, this.cameraRect)
}

