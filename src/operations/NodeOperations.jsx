

const NodeOperations = {
    createNode: (a, b, action) => {
      return {a: a, b: b, action: action, steps: []};
    },
  
    isTarget: (node, target) => {
      return node.a === target || node.b === target;
    },
  
    getNodeId: (node) => {
      return `${node.a},${node.b}`;
    }
  };
  
  export default NodeOperations;
