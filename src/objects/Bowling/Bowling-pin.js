import { Group } from "three";
import { loadScene } from "../../Loaders/Loader.js";
import MODEL from "./bowling-pin.json";

export default class Land extends Group {
  constructor() {
    super();

    this.loadingFunction = (p) => {
      console.log("loading pin", p);
    };
    this.name = "pin";
    this.load();
  }

  async load() {
    const pin = await loadScene(MODEL, this.loadingFunction);

    pin.scale.set(1.2, 1.2, 1.2);
    pin.translateY(-5);
    pin.translateX(1.2);
    this.pin = pin;

    this.add(pin);
  }
}
