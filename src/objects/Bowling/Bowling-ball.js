import { Group, ObjectLoader  } from 'three';
import MODEL from './bowling-ball.json';

export default class Land extends Group {
  constructor() {
    const loader = new ObjectLoader();

    super();

    this.name = 'bowling-ball';

    loader.load(MODEL, (mesh)=>{
      this.add(mesh);
    });
  }
}
