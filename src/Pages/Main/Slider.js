import React from 'react';
import SlideImg from '../../Images/slider-sample-01.png';

const Slider = () => {
  return (
    <section className="Slider">
      <header className="SliderHeader">
        <h2 className="Title">
          <span>•</span> FEATURED STORIES <span>•</span>
        </h2>
      </header>
      <section className="SliderWrap">
        <div className="ImageWrap">
          <img src={SlideImg} alt="featured stories" />
          <div className="Indicator">
            <span className="Icon">
              <i className="fas fa-square" />
            </span>
            <span className="Icon">
              <i className="far fa-square" />
            </span>
            <span className="Icon">
              <i className="far fa-square" />
            </span>
            <span className="Icon">
              <i className="far fa-square" />
            </span>
            <span className="Icon">
              <i className="far fa-square" />
            </span>
          </div>
          <div className="ButtonWrap">
            <div className="Left">
              <i className="fas fa-chevron-circle-left" />
            </div>
            <div className="Right">
              <i className="fas fa-chevron-circle-right" />
            </div>
          </div>
        </div>

        <div className="SliderDetail">
          <p className="DetailCategory">Fashion Tips</p>
          <h2 className="DetailTitle">
            One-And-Done Pieces To Try This Summer
          </h2>
        </div>
      </section>
    </section>
  );
};

export default Slider;
