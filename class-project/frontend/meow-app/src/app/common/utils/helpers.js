function sleep(ms) {
  // Nodejs also has setTimeout in global scope
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { sleep };
