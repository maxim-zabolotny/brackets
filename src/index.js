module.exports = function check(str, bracketsConfig) {
  let chars = str.split(''),
      newBrackets = [],
      stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
      newBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];

  }

  for (let i = 0; i < chars.length; i++) {
      if (chars[i] === stack[stack.length - 1]) {
          stack.pop();
      } else {
          if (newBrackets[chars[i]] !== undefined) stack.push(newBrackets[chars[i]]);
          else return false;
      }
  }

  return stack.length == 0;
}
