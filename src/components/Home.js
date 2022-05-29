import "../components/Home.scss";
import React from "react";
import homeImage from "../images/home.png";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img src={homeImage} className="home__image" />
          <div className="home__row">
            <Product
              id='2323'
              title="monitor"
              price={15.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/81CyDi5Aj4L._SX522_.jpg"
            />
            <Product
              id='2323'
              title="monitor"
              price={15.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/81CyDi5Aj4L._SX522_.jpg"
            />
          </div>
          <div className="home__row">
          <Product
              id='2323'
              title="monitor"
              price={15.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/81CyDi5Aj4L._SX522_.jpg"
            />
          <Product
              id='2323'
              title="monitor"
              price={15.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/81CyDi5Aj4L._SX522_.jpg"
            />
          <Product
              id='2323'
              title="monitor"
              price={15.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/81CyDi5Aj4L._SX522_.jpg"
            />
            
          </div>
          <div className="home__row">
          <Product
              id='2323'
              title="monitor"
              price={15.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/81CyDi5Aj4L._SX522_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
