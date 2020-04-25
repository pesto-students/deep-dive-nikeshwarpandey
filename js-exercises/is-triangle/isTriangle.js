function isTriangle(sideA, sideB, sideC) {
  const sumofAB = sideA + sideB;
  const sumofBC = sideB + sideC;
  const sumofCA = sideC + sideA;
  return (sumofAB > sideC && sumofBC > sideA && sumofCA > sideB)
}

export {
  isTriangle,
};
