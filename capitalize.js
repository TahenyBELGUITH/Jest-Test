function capitalize(string) {
  const strArray = [...string];
  strArray[0] = strArray[0].toUpperCase();
  return strArray.join("");
}

export default capitalize;
