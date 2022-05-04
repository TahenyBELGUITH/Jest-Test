export default function stringLength  (string)  {
  const len = string.length;
  if (len >= 1 && len <= 10) {
    return len;
  } else {
    throw new Error("string is greater than 10 characters");
  }
};
