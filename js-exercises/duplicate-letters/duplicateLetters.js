
function duplicateLetters(args) {
  let chars = {};
  let maxduplicates = 0;
  for (let i = 0; i < args.length; i++) {
    if (chars.hasOwnProperty(args[i])) {
      chars[args[i]] += 1;
    } else {
      chars[args[i]] = 1;
    }

  }

  for (const j in chars) {
    if (chars[j] > 1 && chars[j] > maxduplicates) {
      maxduplicates = chars[j];
    }
  }
  return maxduplicates ? maxduplicates : false;
}

export {
  duplicateLetters,
};
