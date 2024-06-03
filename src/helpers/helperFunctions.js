export const calculateDiscountPercent = (originalVal, currentVal) => {
  return Math.floor(((originalVal - currentVal) / originalVal) * 100);
};

export const getCharactersToLength = (str, n) => {
  return str.length < n ? str : str.slice(0, n - 1) + "...";
};

export const getArrayFromDescription = (str) => {
  let specsArray = str.split(";");
  specsArray = specsArray
    .map((spec) => spec.trim())
    .filter((spec) => spec.length > 0);

  return specsArray;
};

export const getCalculatedShippingCharge = (totalCost, totalItems) => {
  if (totalCost < 49 && totalItems > 0) {
    return 4.99;
  } else {
    return 0;
  }
};

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
