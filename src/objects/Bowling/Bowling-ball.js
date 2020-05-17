import { Group } from 'three';
import {loadScene, loadTexture} from '../../Loaders/Loader.js'
import MODEL from './bowling-ball.json';
import ballTexture from './bowling-ball.jpg'

export default class BowlingBall extends Group {
  constructor() {
    super();

    this.loadingFunction = (p) => {
      loadTexture(ballTexture,()=>{
        console.log('loading bowling ball', p)
      })
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

    this.add(ball);
  }
}
