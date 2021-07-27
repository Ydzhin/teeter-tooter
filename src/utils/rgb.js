
import { generateRandomNumber } from "./randomNumber";
export function generateRandomRGBColor() {
  const maxValue = 200;

  const r = generateRandomNumber(0, maxValue);
  const g = generateRandomNumber(0, maxValue);
  const b = generateRandomNumber(0, maxValue);

  return `rgb(${r}, ${g}, ${b})`;
}
