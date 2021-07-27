export const shapeQuantity = (shapes = [], leftSide = false) => {
  return shapes.reduce((total, current) => {
    const left = leftSide ? 50 - current.left : current.left;

    total += current.weight * left;

    return total;
  }, 0);
};
