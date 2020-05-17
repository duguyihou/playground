import { Group } from 'three';
import Land from './Land/Land.js';
import BasicLights from './Lights.js';
import BowlingBall from './Bowling/Bowling-ball.js'
import BowlingPin from './Bowling/Bowling-pin.js'

export default class SeedScene extends Group {
  constructor() {
    super();

    const land = new Land();
    const lights = new BasicLights();
    const bowlingBall = new BowlingBall()
    const bowlingPin = new BowlingPin()

    bowlingBall.scale.set(2,2,2)

    // bowlingPin.rotation.x = Math.PI
    bowlingPin.scale.set(2,2,2)
    this.add(lights, land, bowlingBall, bowlingPin);
  }

  update(timeStamp) {
    // this.rotation.y = timeStamp / 10000;
  }
}
