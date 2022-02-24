import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZZINI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              excepturi error possimus molestias iste libero. Commodi debitis.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
