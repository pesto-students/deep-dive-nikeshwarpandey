function isTriangle(sideA, sideB, sideC) {
  let sumofAB = sideA + sideB;
  let sumofBC = sideB + sideC;
  let sumofCA = sideC + sideA;
  if (sumofAB > sideC && sumofBC > sideA && sumofCA > sideB) {
    return true
  } else {
    return false
  }
}
// console.log(isTriangle(3, 4, 5));
// console.log(isTriangle(1, 4, 2));
export {
  isTriangle,
};
