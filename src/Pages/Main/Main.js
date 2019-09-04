import React, { Component } from 'react';
import './Main.scss';
import Post from './Post';
import Footer from '../../Components/Footer/Footer';
import Slider from './Slider';
import data from './data';
import Readmore from '../../Components/Readmore/Readmore';

class Main extends Component {
  render() {
    return (
      <>
        <div className="Main">
          <div className="Wrapper">
            <Slider />
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
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
