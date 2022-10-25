import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { randomNumberBetween } from './utility.js'

class Game {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.context = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height
    this.lastTime = Date.now()
    this.entities = []
  }
  spawnEnemy() {
    this.entities.push(
      new Enemy(
        this.entities.length % 2 === 0 ? 0 : this.width,
        randomNumberBetween(20, height - 20).randomNumberBetween(10, 20),
        0,
        10
      )
    )
  }
  removeEnemy() {}
}
let gameObj = new Game()
gameObj.entities.push(new Player(150, gameObj.height - 25, 0, 100, 'w', 's'))
gameObj.entities.push(new Player(450, gameObj.height - 25, 0, 100, 'o', 'l'))

export function tick() {
  let currentTime = Date.now()
  let deltaTime = (currentTime - gameObj.lastTime) / 1000
  gameObj.lastTime = currentTime
  gameObj.context.clearRect(0, 0, gameObj.width, gameObj.height)

  for (let i = 0; i < gameObj.entities.length; i++) {
    let entity = gameObj.entities[i]
    entity.tick(gameObj.context, deltaTime, gameObj.height)
  }

  requestAnimationFrame(tick)
}

export default gameObj
