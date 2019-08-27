import React, { Component } from 'react';
import './Main.scss';
import Slider from '../Images/slider-sample.png'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Wrapper">
          <section className="Slider">
            <header className="SliderHeader">
              <h2 className="Title">
                <span>•</span> FEATURED STORIES <span>•</span>
              </h2>
            </header>
            <section className="SliderWrap">
              <img src={Slider} alt="featured stories" />
              <div className="SliderDetail">
                <p className="DetailCategory">
                  FASHION TIPS
                </p>
                <h2 className="DetailTitle">
                  One-And-Done Pieces To Try This Summer
                </h2>
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
