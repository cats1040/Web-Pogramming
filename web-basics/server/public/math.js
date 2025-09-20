function sum(...items) {
  let ans = 0;
  for (let item in items) ans += item;
  return ans;
}

export { sum };
