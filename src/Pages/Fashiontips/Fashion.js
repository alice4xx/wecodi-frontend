import React, { Component } from 'react';
import './Fashion.scss';
import FashionPost from './FashionPost';
import data from './data';
import Readmore from '../../Components/Readmore/Readmore';
import Footer from '../../Components/Footer/Footer';

class Fashion extends Component {
  render() {
    return (
      <div className="Fashion_Container">
        <div className="page_Body">
          <div className="body_Left">
            <div>
              <div className="recent">
                <span>•</span> RECENT FASHION TIPS <span>•</span>
              </div>
              <div className="fashionTips">
                <div className="postWrap">
                  {data.map((el, i) => (
                    <FashionPost key={i} info={el} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="body_Right">
            <div className="trending">
              <div className="nomoreTrending">
                <span>•</span> TRENDING NOW <span>•</span>
              </div>
              <ul className="trendingNow">
                <li>
                  <a href="/">
                    <span> All of your Style Shuffle Questions, Answered </span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>31 Days of Outfits: August Edition</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>
                      {' '}
                      Stitch Fix Stylists Share Their Favorite Fall 2019 Looks
                    </span>
                  </a>
                </li>
              </ul>
              <div className="nomoreTrending2">
                <span>•</span> RECENT STYLIST ADVICE <span>•</span>
              </div>
              <ul className="trendingNow">
                <li>
                  <a href="/">
                    <span>How can I build a capsule wardrobe for work? </span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>What are the new fall trends? </span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>How do I tie a tie-front top? </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Readmore />
        <Footer />
      </div>
    );
  }
}

export default Fashion;

{
  /* <div className="fashion_articles">
  <div className="thumbnail">
    <img src={outfit1} alt="outfit_1" width="120" />
  </div>
  <div className="entry">
    <header className="entry-Container">
      <p className="entry-category">Fashion Tips</p>
      <h3 className="entry-title">
        <a href="/" className="articleTitle">
          31 Days of Outfits : August Editi
        </a>
      </h3>
    </header>
  </div>
</div>
</div>
<div className="fashion_articles">
<div className="thumbnail">
  <img src={outfit2} alt="outfit_2" width="120" />
</div>
<div className="entry">
  <header className="entry-Container">
    <p className="entry-category">Fashion Tips</p>
    <h3 className="entry-title">
      <a href="/" className="articleTitle">
        One-And-Done Pieces To Try This Summer
      </a>
    </h3>
  </header>
</div>
</div>
</div>
</div> */
}
