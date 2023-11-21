const NodeOperations = {
  // The 'createNode' method creates a new node. It takes as input the amounts of water in jars 'a' and 'b', and the action that led to this state. It returns an object
  createNode: (a, b, action) => {
    return { a: a, b: b, action: action, steps: [] };
  },
  // The 'isTarget' method checks if a given node is the target. It takes as input the node and the target amount of water. It returns 'true' if one of the jugs in the node contains the target amount of water, and 'false' otherwise.
  isTarget: (node, target) => {
    return node.a === target || node.b === target;
  },
// The 'getNodeId' method generates a unique identifier for a node.
  getNodeId: (node) => {
    return `${node.a},${node.b}`;
  },
};

export default NodeOperations;
