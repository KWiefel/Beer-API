import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <main className="main_home">
      <Link to="/list">
        <div className="card__wrapper">
          <img
            src="src/assets/img/christin-hume-08tX2fsuSLg-unsplash.jpg"
            alt="pic"
          />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            doloribus deleniti, doloremque assumenda quae quibusdam!
          </p>
        </div>
      </Link>
      <Link to="/random">
        <div className="card__wrapper">
          <img
            src="src/assets/img/proriat-hospitality-flENqflm6xU-unsplash.png"
            alt="pic"
          />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            doloribus deleniti, doloremque assumenda quae quibusdam!
          </p>
        </div>
      </Link>
    </main>
  );
};

export default Home;
