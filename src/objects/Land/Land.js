import { Group } from 'three';
import { loadScene } from "../../Loaders/Loader.js";
import MODEL from './land.json';

export default class Land extends Group {
  constructor() {
    super();

    this.loadingFunction = (p) => {
      console.log("loading land", p);
    };
    this.name = "land";
    this.load();
  }

  async load() {
    const land = await loadScene(MODEL, this.loadingFunction);
    land.scale.set(6, 6, 6);
    this.land = land;

    this.add(land);
  }
}
