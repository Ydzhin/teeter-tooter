export function generateRandomNumber(min = 0, max = 1) {
  return min + Math.round(Math.random() * max);
}
