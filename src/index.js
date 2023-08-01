module.exports = function reverse (n) {
  if (n > 0) {
  n = String(n);
  n = n.split("").reverse().join("");
  return +n;} else {
  n = -n;
  n = String(n);
  n = n.split("").reverse().join("");
  return +n;
  }
}