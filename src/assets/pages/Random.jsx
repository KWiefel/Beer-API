import Navbar from "./../components/Navbar";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import svgFile from "./../img/arrow.svg";

import "./Detail.scss";

const Random = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="main_detail">
      <main>
        {data ? (
          <div className="itemDetail__Wrapper" key={data._id}>
            <img src={data.image_url} alt="" />
            <div className="item_text">
              <p className="title">{data.name.slice(0, 15)}</p>
              <p className="subtitle">{data.tagline}</p>
              <p className="brewed">
                First brewed: <span>{data.first_brewed}</span>
              </p>
              <p className="attenuation">
                Attenuation level: <span>{data.attenuation_level}</span>
              </p>
              <p className="description">{data.description}</p>
            </div>
            <Link className="arrowBtn" to="/">
              <img src={svgFile} alt="button" />
            </Link>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
};

export default Random;
