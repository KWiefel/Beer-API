import Navbar from "./../components/Navbar";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import svgFile from "./../img/arrow.svg";

import "./Detail.scss";

const Detail = () => {
  const idParams = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => console.error(err));
  }, []);

  // console.log(data);

  const itemDetail =
    data && data.filter((beer) => beer._id === idParams.item_id);

  return (
    <div className="main_detail">
      <main>
        {itemDetail ? (
          itemDetail.map((beer) => (
            <div className="itemDetail__Wrapper" key={beer._id}>
              <img src={beer.image_url} alt="" />
              <div className="item_text">
                <p className="title">{beer.name.slice(0, 15)}</p>
                <p className="subtitle">{beer.tagline}</p>
                <p className="brewed">
                  First brewed: <span>{beer.first_brewed}</span>
                </p>
                <p className="attenuation">
                  Attenuation level: <span>{beer.attenuation_level}</span>
                </p>
                <p className="description">{beer.description}</p>
              </div>
              <Link className="arrowBtn" to="/list">
                <img src={svgFile} alt="button" />
              </Link>
            </div>
          ))
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

export default Detail;
