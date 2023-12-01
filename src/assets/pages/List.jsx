import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./List.scss";
import { Link } from "react-router-dom";

const List = () => {
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="main_list">
      <main>
        {data ? (
          <div>
            {data.map((beer) => (
              <div className="list_item" key={beer._id}>
                <div className="item_img">
                  <img src={beer.image_url} alt="productPic" />
                </div>
                <div className="item_text">
                  <p className="title">{beer.name.slice(0, 15)}</p>
                  <p className="subtitle">{beer.tagline}</p>
                  <p className="creator">Created by: {beer.name}</p>
                  <Link to={`/dynamic-router/${beer._id}`}>Details</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Laden....</p>
        )}
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
};

export default List;
