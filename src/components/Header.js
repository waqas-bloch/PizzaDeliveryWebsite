import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner" id="home">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delivery</h3>
            <h1>MAESTRO PIZZINI</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit corrupti sit hic ullam repellendus iusto et
              aspernatur.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DELIVERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
