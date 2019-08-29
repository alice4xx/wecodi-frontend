import React, { Component } from 'react';
import './Main.scss';
import Post from './Post';
import data from './data';
import Readmore from '../../Components/Readmore/Readmore';
import SlideImg from '../../Images/slider-sample.png';

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
              </div>

              <div className="SliderDetail">
                <p className="DetailCategory">Fashion Tips</p>
                <h2 className="DetailTitle">
                  One-And-Done Pieces To Try This Summer
                </h2>
              </div>
            </section>
          </section>
          <section className="Recent">
            <header className="RecentHeader">
              <h2 className="Title">
                <span>•</span> Recent Stories <span>•</span>
              </h2>
            </header>
            <div className="Posts">
              {data.map((el, i) => (
                <Post key={i} info={el} />
              ))}
            </div>
          </section>
          <Readmore />
        </div>
        <footer />
      </div>
    );
  }
}

export default Main;
