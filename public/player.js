import { Position, Velocity } from "./component.js"

class Player extends Entity {
    super()
    constructor() {
        this.position = new Position(x, y)
        this.velocity = new Velocity(dx, dy)

    }
    draw() {
        context.beginPath()
        context.strokeStyle = this.color
        //First Half
        context.moveTo(this.position.x, this.position.y)
        context.lineTo(this.position.x - 5, this.position.y + 5)
        context.lineTo(this.position.x - 1, this.position.y + 5)
        context.lineTo(this.position.x - 1, this.position.y + 9)
        context.lineTo(this.position.x - 7, this.position.y + 15)
        context.lineTo(this.position.x - 4, this.position.y + 15)
        context.lineTo(this.position.x - 4, this.position.y + 18)
        context.lineTo(this.position.x - 1, this.position.y + 18)
        context.lineTo(this.position.x - 1, this.position.y + 15)
        context.lineTo(this.position.x + 1, this.position.y + 15)
        context.lineTo(this.position.x, this.position.y + 15)
        //Second Half
        context.moveTo(this.position.x, this.position.y)
        context.lineTo(this.position.x + 5, this.position.y + 5)
        context.lineTo(this.position.x + 1, this.position.y + 5)
        context.lineTo(this.position.x + 1, this.position.y + 9)
        context.lineTo(this.position.x + 7, this.position.y + 15)
        context.lineTo(this.position.x + 4, this.position.y + 15)
        context.lineTo(this.position.x + 4, this.position.y + 18)
        context.lineTo(this.position.x + 1, this.position.y + 18)
        context.lineTo(this.position.x + 1, this.position.y + 15)
        context.lineTo(this.position.x - 1, this.position.y + 15)
        context.lineTo(this.position.x, this.position.y + 15)
        //Using moveTo and closePath to prevent bleeding into other drawings
        context.moveTo(this.position.x, this.position.y)
        context.closePath()
        context.stroke()
    }
}