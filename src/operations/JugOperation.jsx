

const jugOperation = {
    fill: (jugSize, node, jug) => {
      return jug === "X"
        ? { a: jugSize, b: node.b, action: `Fill X` }
        : { a: node.a, b: jugSize, action: `Fill Y` };
    },
  
    empty: (node, jug) => {
      return jug === "X"
        ? { a: 0, b: node.b, action: `Empty X` }
        : { a: node.a, b: 0, action: `Empty Y` };
    },
  
    transfer: (jugX, jugY, node, direction) => {
      if (direction === "XtoY") {
        return {
          a: Math.max(node.a + node.b - jugY, 0),
          b: Math.min(node.a + node.b, jugY),
          action: `Transfer X to Y`,
        };
      } else {
        return {
          a: Math.min(node.a + node.b, jugX),
          b: Math.max(node.a + node.b - jugX, 0),
          action: `Transfer Y to X`,
        };
      }
    },
  };
  
  export default jugOperation;
  