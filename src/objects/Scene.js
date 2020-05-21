import { Group, TextureLoader } from 'three';
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

    const p0 = new BowlingPin()
    const p1 = new BowlingPin()
    const p2 = new BowlingPin()
    const p3 = new BowlingPin()
    const p4 = new BowlingPin()
    const p5 = new BowlingPin()
    const p6 = new BowlingPin()
    const p7 = new BowlingPin()
    const p8 = new BowlingPin()
    const p9 = new BowlingPin()

    p0.rotateY(.2)
    p1.rotateY(.4)
    p2.rotateY(.6)
    p3.rotateY(.8)
    p4.rotateY(1)

    p5.rotateX(.4)
    p5.rotateY(.2)





    this.add(lights, land, bowlingBall, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
  }

  update(timeStamp) {
    // this.rotation.y = timeStamp / 10000;
  }
}
