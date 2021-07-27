import { shapeCreator } from "@/utils/shapeCreator";
import {
  MAX_FALLING_INTERVAL_GAP,
  MIN_FALLING_INTERVAL_GAP,
  MIN_WEIGHT,
  MAX_WEIGHT,
  SCALE_STEP,
} from "@/constVariables";
export default {
  addDroppedShape(state, shape = {}) {
    state.droppedShapes.push(shape);
  },

  clearAllShapeArrs(state) {
    state.droppedShapes = [];
    state.fallingShapes = [];
    state.randomlyPlacedShapes = [];
  },

  toggleSimulation(state) {
    state.isGamePaused = !state.isGamePaused;
  },

  generateShape(
    { randomlyPlacedShapes, fallingShapes },
    randomlyPlaced = false
  ) {
    const shape = shapeCreator(MIN_WEIGHT, MAX_WEIGHT, SCALE_STEP);
    if (randomlyPlaced) {
      randomlyPlacedShapes.push(shape);
    } else {
      fallingShapes.push(shape);
    }
  },

  toggleModal(state, isShown = false) {
    state.isModalShown = isShown;
  },

  updateFallingIntervalGap(state, reset = false) {
    if (reset) {
      state.fallingIntervalGap = MAX_FALLING_INTERVAL_GAP;
    } else if (state.fallingIntervalGap > MIN_FALLING_INTERVAL_GAP) {
      state.fallingIntervalGap--;
    }
  },
};
