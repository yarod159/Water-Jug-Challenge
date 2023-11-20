import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-body">
          <div className="home-data">
            <div className="home-title">Water Jug Problem</div>

            <div className="home-data-input">
              <div>Bucket X :</div>
              <input type="text" />
            </div>
            <div className="home-data-input">
              <div>Bucket Y :</div>
              <input type="text" />
            </div>
            <div className="home-data-input">
              <div>Amount wanted Z :</div>
              <input type="text" />
            </div>
          </div>
          <div className="home-result"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
