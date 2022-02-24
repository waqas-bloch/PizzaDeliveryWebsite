import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const Items = () => {
  return (
    <div className="prices" id="items">
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col-4">
            <div className="price">
              <Card
                name="Pizza Margeritta"
                price="$20.00"
                img="/img/pizza1.png"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <Card
                name="Pizza Margeritta"
                price="$50.00"
                img="/img/pizza2.png"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <Card
                name="Pizza Margeritta"
                price="$30.00"
                img="/img/pizza3.png"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <Card
                name="Pizza Margeritta"
                price="$40.00"
                img="/img/pizza4.png"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <Card
                name="Pizza Margeritta"
                price="$60.00"
                img="/img/pizza5.png"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <Card
                name="Pizza Margeritta"
                price="$100.00"
                img="/img/pizza6.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
