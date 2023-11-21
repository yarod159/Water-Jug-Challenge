

const jugOperation = {
    fill: (jugSize, node, jug) => {
      // If the jug is 'X', fill 'X' and maintain the same water level in 'Y'.
      // If the jug is 'Y', fill 'Y' and maintain the same water level in 'X'.
      return jug === "X"
        ? { a: jugSize, b: node.b, action: `Fill X` }
        : { a: node.a, b: jugSize, action: `Fill Y` };
    },
  
    empty: (node, jug) => {
    // If the jug is 'X', 'X' is emptied and the same water level is maintained in 'Y'.
      // If the jug is 'Y', 'Y' is emptied and the same water level is maintained in 'X'.
      return jug === "X"
        ? { a: 0, b: node.b, action: `Empty X` }
        : { a: node.a, b: 0, action: `Empty Y` };
    },
  
   
    transfer: (jugX, jugY, node, direction) => {
       // If the address is 'XtoY', water is transferred from 'X' to 'Y'.
      // If the address is 'YtoX', water is transferred from 'Y' to 'X'.
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
  