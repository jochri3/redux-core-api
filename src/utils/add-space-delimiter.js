export const addSpaceDelimiter = (str, olDelimiter) => {
  let parsedStr = "";
  for (let char of str) {
    if (char === olDelimiter) {
      parsedStr += " ";
    } else {
      parsedStr += char;
    }
  }
  return parsedStr;
};
