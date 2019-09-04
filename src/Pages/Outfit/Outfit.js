import React, { Component } from 'react';
import './Outfit.scss';
import Footer from '../../Components/Footer/Footer';
import Readmore from '../../Components/Readmore/Readmore';
import FancyBox from './FancyBox';
import Content from './Content';

class Outfit extends Component {
  render() {
    return (
      <>
        <div className="Outfit">
          <div className="Wrapper">
            <FancyBox />
            <section className="OutfitHeader">
              <h2 className="Title">
                <span>•</span> Outfit Ideas <span>•</span>
              </h2>
            </section>
            <section className="MainGallery">
              <div className="GalleryHeader">
                <h3 className="GalleryTitle">
                  Explore, Discover & Be Inspired
                </h3>
                <p className="GalleryDescription">
                  Need some outfit ideas? Look through hundreds of Stitch Fix
                  styles or see what our clients are wearing!
                </p>
              </div>
              <section className="GalleryContainer">
                <div className="GalleryGrid">
                  <Content />
                  <div className="GridDetail">
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                  </div>
                </div>
              </section>
            </section>
            <section className="FilteredGallery">
              <ul className="TagsWrap">
                <li className="TagsList">Latest</li>
                <li className="TagsList">Summer-Outfits</li>
                <li className="TagsList">Casual</li>
                <li className="TagsList">Denim</li>
                <li className="TagsList">Athleisure</li>
                <li className="TagsList">Date</li>
              </ul>
              <div className="FilterdContainer">
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
              </div>
              <Readmore />
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Outfit;
