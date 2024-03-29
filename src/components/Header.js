import { Fragment } from "react";
import CartButton from "./Cart/CartButton";
import image from "../img/meals.jpg";
import img2 from "../img/download.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <nav id="nav-container">
        <div className="container">
          <h1>React Panda</h1>
          <CartButton />
        </div>
      </nav>
      <div className="img">
        <img src={image} />
      </div>
    </Fragment>
  );
};

export default Header;
