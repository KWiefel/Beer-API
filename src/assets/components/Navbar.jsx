import { Link } from "react-router-dom";
import "./Navbar.scss";
import svgFile from "./../img/beer.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={svgFile} alt="beer" />
      </Link>
    </nav>
  );
};

export default Navbar;
