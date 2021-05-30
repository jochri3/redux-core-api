export const capitalize = (str) => {
  let capitalizedStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      capitalizedStr += str[i].toUpperCase();
    } else {
      capitalizedStr += str[i];
    }
  }
  return capitalizedStr;
};
