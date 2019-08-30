import React, { Component } from 'react';
import './Fashion.scss';
import outfit1 from '../../Images/fashiontips_1.png';
import outfit2 from '../../Images/fashiontips_2.png';
// import Readmore from '../../Components/Readmore/Readmore';

class Fashion extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="page_Body">
          <div className="body_Left">
            <div className="title_Left">
              <div className="recent">
                <span>•</span> RECENT FASHION TIPS <span>•</span>
              </div>
              <div className="fashionTips">
                <div className="articles">
                  <div className="thumbnail">
                    {/* //<div className="temp">a</div> */}
                    <img src={outfit1} alt="outfit_1" width="120" />
                  </div>
                  <div className="entry">
                    <header className="entry-header">
                      <p className="entry-category">Fashion Tips</p>
                      <h3 className="entry-title">
                        <a href="/">31 Days of Outfits : August Edition </a>
                      </h3>
                    </header>
                  </div>
                </div>
                <div className="fashionTips">
                  <div className="articles">
                    <div className="thumbnail">
                      {/* //<div className="temp">a</div> */}
                      <img src={outfit2} alt="outfit_2" width="120" />
                    </div>
                    <div className="entry">
                      <header className="entry-header">
                        <p className="entry-category">Fashion Tips</p>
                        <h3 className="entry-title">
                          <a href="/">One-And-Done Pieces To Try This Summer</a>
                        </h3>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body_Right">
            <div className="title_Right">
              <div className="trending">
                <div className="nomoreTrending">
                  <span>•</span> TRENDING NOW <span>•</span>
                </div>
                <ul className="trendingNow">
                  <li>
                    <a href="/">
                      <span>
                        {' '}
                        All of your Style Shuffle Questions, Answered{' '}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>31 Days of Outfits: August Edition</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span> This Is Stitch Fix: Your New Way To Shops </span>
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
        </div>
        <footer />
      </div>
    );
  }
}

export default Fashion;
