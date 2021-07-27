import {generateRandomNumber} from "./randomNumber";
import {iterator} from "./iterator";
import {generateRandomRGBColor} from './rgb';
export const shapeCreator = (minWeight, maxWeight, scaleStep) => {
  const weight = generateRandomNumber(minWeight, maxWeight - 1);
  const type = generateRandomNumber(1, 2);
  const left = generateRandomNumber(0, 40);
  const color = generateRandomRGBColor();
  const top = 0;
  const scale = 1 + scaleStep * (weight - 1);
  const id = iterator.next().value;
  const shape = { id, color, left, scale, top, type, weight };
  return shape;
};
