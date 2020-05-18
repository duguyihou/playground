import { Group } from 'three';
import {loadScene } from '../../Loaders/Loader.js'
import MODEL from './bowling-ball.json';

export default class BowlingBall extends Group {
  constructor() {
    super();
    this.loadingFunction = (p) => {
      console.log('loading pin', p)
    }
    this.name = 'ball';
    this.load();
  }

  async load() {
    const ball = await loadScene(MODEL, this.loadingFunction);
    ball.rotation.set(0,Math.PI,0);
    ball.scale.set(1.2,1.2,1.2)
    ball.translateZ(6)
    ball.translateY(1.2)
    ball.translateX(-3)
    this.ball = ball;
    console.log(ball)

    this.add(ball);
  }
}
