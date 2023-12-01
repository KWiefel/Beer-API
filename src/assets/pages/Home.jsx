import { Link } from "react-router-dom";
import "./Home.scss";
import img1 from "./../img/bild1.jpg";
import img2 from "./../img/bild2.png";

const Home = () => {
  return (
    <main className="main_home">
      <Link to="/list">
        <div className="card__wrapper">
          <img src={img1} alt="pic" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            doloribus deleniti, doloremque assumenda quae quibusdam!
          </p>
        </div>
      </Link>
      <Link to="/random">
        <div className="card__wrapper">
          <img src={img2} alt="pic" />
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
