
import JugOperation from '../operations/JugOperation.jsx';
import NodeOperations from '../operations/NodeOperations.jsx';

const SolveWaterJugBFS = (X, Y, Z) => {
 
  let queue = [];
  queue.push(NodeOperations.createNode(0, 0, 'Initial'));

 
  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();

   
    if (NodeOperations.isTarget(node, Z)) {
      return node.steps;
    }
    
    let nextStates = [
      JugOperation.fill(X, node, 'X'),
      JugOperation.fill(Y, node, 'Y'),
      JugOperation.empty(node, 'X'),
      JugOperation.empty(node, 'Y'),
      JugOperation.transfer(X, Y, node, 'XtoY'),
      JugOperation.transfer(X, Y, node, 'YtoX')
    ];
    
    for (let nextState of nextStates) {
      let stateString = NodeOperations.getNodeId(nextState);
      if (!visited.has(stateString)) {
        visited.add(stateString);
        queue.push({a: nextState.a, b: nextState.b, steps: [...node.steps, `${nextState.action} (X: ${nextState.a}, Y: ${nextState.b})`]});
      }
    }
  }
  
  return ['No solution'];
};

export default SolveWaterJugBFS;
