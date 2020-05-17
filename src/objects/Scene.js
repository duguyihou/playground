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
    // Land
    land.scale.set(6,6,6)
    // Bowling Pin
    bowlingPin.scale.set(1.2,1.2,1.2)
    bowlingPin.translateZ(8)
    this.add(lights, land, bowlingBall, bowlingPin);
  }

  update(timeStamp) {
    // this.rotation.y = timeStamp / 10000;
  }
}
