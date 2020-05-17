import { Group, ObjectLoader  } from 'three';
import MODEL from './bowling-pin.json';

export default class Land extends Group {
  constructor() {
    const loader = new ObjectLoader();

    super();

    this.name = 'bowling-pin';

    loader.load(MODEL, (mesh)=>{
      this.add(mesh);
    });
  }
}
