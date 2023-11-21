
import JugOperation from '../operations/JugOperation.jsx';
import NodeOperations from '../operations/NodeOperations.jsx';

const SolveWaterJugBFS = (X, Y, Z) => {
 // Initialises a queue and adds an initial node to the queue
  let queue = [];
  queue.push(NodeOperations.createNode(0, 0, 'Initial'));

 // Initialises a set to keep track of visited states
  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();

   // If the node's state is the target, returns the sequence of actions
    if (NodeOperations.isTarget(node, Z)) {
      return node.steps;
    }
    // Generates all of the following possible states
    let nextStates = [
      JugOperation.fill(X, node, 'X'),
      JugOperation.fill(Y, node, 'Y'),
      JugOperation.empty(node, 'X'),
      JugOperation.empty(node, 'Y'),
      JugOperation.transfer(X, Y, node, 'XtoY'),
      JugOperation.transfer(X, Y, node, 'YtoX')
    ];
    
    for (let nextState of nextStates) {
      // If the state has not been visited
      let stateString = NodeOperations.getNodeId(nextState);
      if (!visited.has(stateString)) {
        // Mark status as visited
        visited.add(stateString);
        // Add the new state to the queue
        queue.push({a: nextState.a, b: nextState.b, steps: [...node.steps, `${nextState.action} (X: ${nextState.a}, Y: ${nextState.b})`]});
      }
    }
  }
  
  return ['No solution'];
};

export default SolveWaterJugBFS;
