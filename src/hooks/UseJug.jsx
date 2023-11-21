
import { useState } from "react";
import SolveWaterJugBFS from '../operations/SolveWaterJugBFS.jsx';

const UseJug = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [Z, setZ] = useState(0);
  const [steps, setSteps] = useState([]);

  const handleXChange = (event) => {
    setX(parseInt(event.target.value));
  };

  const handleYChange = (event) => {
    setY(parseInt(event.target.value));
  };

  const handleZChange = (event) => {
    setZ(parseInt(event.target.value));
  };

  const handleSolve = () => {
    if (Z > X && Z > Y) {
      setSteps(['This operation cannot be performed because Z is larger than X and Y.']);
    } else {
      const changes = SolveWaterJugBFS(X, Y, Z);
      if (changes[0] !== 'No solution') {
        changes.push('SOLVED');
      }
      setSteps(changes);
    }
  };
  

  return { X, Y, Z, steps, handleXChange, handleYChange, handleZChange, handleSolve };
};

export default UseJug;
