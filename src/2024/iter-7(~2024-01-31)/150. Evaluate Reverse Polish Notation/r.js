function evalRPN(tokens) {
  let stack = [];
  let ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };
  for (let t of tokens) {
    if (ops[t]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(ops[t](second, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
}

evalRPN(["2", "1", "+", "3", "*"]);
