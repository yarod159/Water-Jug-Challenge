
import "./home.css";

import UseJugSolver from '../hooks/UseJug.jsx';


function Home() {
    const { X, Y, Z, steps, handleXChange, handleYChange, handleZChange, handleSolve } = UseJugSolver();


  return (
    <div className="home-container">
    <div className="home-wrapper">
      <div className="home-body">
        <div className="home-data">
          <div className="home-title">Water Jug Problem</div>
          <div className="home-data-input">
            <div>Bucket X :</div>
            <input type="number" id="X" value={X} onChange={handleXChange} />
          </div>
          <div className="home-data-input">
            <div>Bucket Y :</div>
            <input type="number" id="Y" value={Y} onChange={handleYChange} />
          </div>
          <div className="home-data-input">
            <div>Amount wanted Z :</div>
            <input type="number" id="Z" value={Z} onChange={handleZChange} />
          </div>
          <button onClick={handleSolve}>Solve</button>
        </div>
        <div className="home-result">
          <ul>
            {steps.map((step, index) =>
              typeof step === "string" ? (
                <li key={index}>{step}</li>
              ) : (
                <li key={index}>
                  Bucket X: {step[0]}, Bucket Y: {step[1]}, Explanation: {step[2]}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
